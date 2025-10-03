import {Injectable} from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {CartDoc, CartItem, Order, OrdersDoc} from "../../assets/data/cart-items";
import {firstValueFrom} from "rxjs";
import firebase from "firebase/compat/app";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private firestore: AngularFirestore,
              private auth: AngularFireAuth) {
  }

  private async getUserUid(): Promise<string> {
    const user =
      await firstValueFrom(this.auth.user as unknown as import('rxjs').Observable<firebase.User | null>);
    if (!user) {
      throw new Error('User not logged in');
    }
    return user.uid;
  }

  async getCart(): Promise<CartItem[]> {
    const uid = await this.getUserUid();
    const doc = await this.firestore.collection<CartDoc>('carts').doc(uid).ref.get();

    return doc.exists ? (doc.data()?.items || []) : [];
  }
  
  async addToCart(item: CartItem) {
    const uid = await this.getUserUid();
    const cartRef = this.firestore.collection('carts').doc(uid);
    const cartDoc = await this.firestore.collection<CartDoc>('carts').doc(uid).ref.get();
    let items: CartItem[] = [];

    if (cartDoc.exists) {
      items = (cartDoc.data()?.items || []) as CartItem[];
      const existingIndex = items.findIndex((i) => i.id === item.id);
      if (existingIndex >= 0) {
        items[existingIndex].quantity += item.quantity;
      } else {
        items.push(item);
      }
    } else {
      items.push(item);
    }

    await cartRef.set({items}, {merge: true});
  }

  async removeFromCart(itemId: number) {
    const uid = await this.getUserUid();
    const cartRef = this.firestore.collection('carts').doc(uid);
    const cartDoc = await this.firestore.collection<CartDoc>('carts').doc(uid).ref.get();
    if (!cartDoc.exists) return;

    let items: CartItem[] = cartDoc.data()?.items || [];
    items = items.filter((i) => i.id !== itemId);
    await cartRef.set({items}, {merge: true});
  }

  async updateQuantity(itemId: number, quantity: number) {
    const uid = await this.getUserUid();
    const cartRef = this.firestore.collection('carts').doc(uid);
    const cartDoc = await this.firestore.collection<CartDoc>('carts').doc(uid).ref.get();
    if (!cartDoc.exists) return;

    let items: CartItem[] = cartDoc.data()?.items || [];
    const index = items.findIndex((i) => i.id === itemId);
    if (index >= 0) {
      items[index].quantity = quantity;
      await cartRef.set({items}, {merge: true});
    }
  }

  async addToOrders(order: any): Promise<void> {
    try {
      const uid = await this.getUserUid();
      const ordersRef = this.firestore.collection<OrdersDoc>('orders').doc(uid);

      const doc = await ordersRef.ref.get();
      let existingOrders: any[] = [];

      if (doc.exists) {
        existingOrders = doc.data()?.items || [];
      }

      existingOrders.push(order);

      await ordersRef.set({items: existingOrders}, {merge: true});
    } catch (error) {
      console.error('Error adding order:', error);
      throw error;
    }
  }

  async clearCart() {
    const uid = await this.getUserUid();
    await this.firestore.collection('carts').doc(uid).set({items: []});
  }

  async placeOrder(order: Order): Promise<void> {
    const uid = await this.getUserUid();

    await this.firestore.collection('orders').add({
      ...order,
      userId: uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      status: 'pending'
    });

    await this.clearCart();
  }
}
