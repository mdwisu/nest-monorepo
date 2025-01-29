import { Injectable } from '@nestjs/common';
import { CreateCatInput } from './dto/create-cat.input';
import { UpdateCatInput } from './dto/update-cat.input';
import { Cat } from './entities/cat.entity';

@Injectable()
export class CatService {
  private cats: Cat[] = [];
  private idCounter = 1;
  create(createCatInput: CreateCatInput) {
    const newCat: Cat = { id: this.idCounter++, ...createCatInput };
    this.cats.push(newCat);
    return newCat;
  }

  findAll() {
    return this.cats;
  }

  findOne(id: number) {
    return this.cats.find((cat) => cat.id === id);
  }

  update(id: number, updateCatInput: UpdateCatInput) {
    const index = this.cats.findIndex((cat) => cat.id === id);
    if (index === -1) return null;
    this.cats[index] = { ...this.cats[index], ...updateCatInput };
    return this.cats[index];
  }

  remove(id: number) {
    const index = this.cats.findIndex((cat) => cat.id === id);
    if (index === -1) return false;
    this.cats.splice(index, 1);
    return true;
  }
}
