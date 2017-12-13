import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test recipe', 'This is simply a test', 'https://c1.staticflickr.com/6/5643/30102545481_54a2fdeeaa_b.jpg')
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
