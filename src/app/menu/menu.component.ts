import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {




  constructor() { }

  menuItems = [
    {
      id: 1,
      name: 'Pizza (Slice)',
      description: 'Toppings: Pineapple, Jalapéno',
      image: 'https://img.icons8.com/emoji/452/pizza-emoji.png',
      price: 2.29,
      quantity: 0,
    },
    {
      id: 2,
      name: 'Hot Sandwich',
      description: 'Authentic Philly Cheese Steak',
      image: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/sandwich-2604070-2168300.png',
      price: 6.99,
      quantity: 0,
    },
    {
      id: 3,
      name: 'Loaded Nachos Supreme',
      description: 'And our guac doesn\'t cost extra!',
      image: 'https://image.flaticon.com/icons/png/128/581/581772.png',
      price:  4.79,
      quantity: 0,
    },
    {
      id: 4,
      name: 'Milkshake',
      description: 'Mocha-flavored milkshake with whipped cream',
      image: 'https://i.pinimg.com/originals/c0/5c/83/c05c8317409aca24bebd2f29d3855c6d.png',
      price:  3.99,
      quantity: 0,
    },
    {
      id: 5,
      name: 'Soda',
      description: 'Cola || Diet Cola, please specify below ',
      image: 'https://icon-library.com/images/soda-icon/soda-icon-10.jpg',
      price:  1.19,
      quantity: 0,
    },

  ];

  enteredDiscount: string;

  hasDiscount = false;

  discountInvalid: boolean;
  discountValid: boolean;


  checkAndDecrease(item: any): void{
    if (typeof item.quantity !== 'number') {
      item.quantity = 0;
      return;
    } else {
      item.quantity--;
    }
    if (item.quantity <= 0){
      item.quantity = 0;
    }
  }

  checkAndIncrease(item: any): void{
    if (typeof item.quantity !== 'number') {
      item.quantity = 1;
      return;
    } else {
      item.quantity++;
    }
    if (item.quantity <= 0){
      item.quantity = 1;
    }

  }

  calcSubtotal(): number{
    let totalPrice = 0;
    for (const item of this.menuItems){
      totalPrice += item.price * item.quantity;
    }
    return totalPrice;
  }

  calcTax(): number{
    return this.calcSubtotal() * 0.065;
  }

  validateDiscount(enteredDiscount): void {
      if (enteredDiscount === 'tech552') {
        this.hasDiscount = true;
        this.discountInvalid = false;
        this.discountValid = true;
      } else {
        this.discountValid = false;
        this.discountInvalid = true;
      }
  }

  calcDiscount(): number{
   const discount = (this.calcSubtotal() + this.calcTax()) * 0.15;
   return -discount;
  }


  calcTotal(): number{
    if (this.hasDiscount === true){
      return this.calcSubtotal() + this.calcTax() + this.calcDiscount();
    }
    return this.calcSubtotal() + this.calcTax();
  }


  ngOnInit(): void {
  }

}


