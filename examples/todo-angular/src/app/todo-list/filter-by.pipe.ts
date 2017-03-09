import { Pipe, PipeTransform } from '@angular/core';

import { ITodo } from './todo-list.redux';

@Pipe({
    name: 'filterBy'
})
export class FilterByPipe implements PipeTransform {
    transform(todos: ITodo[], filter: string): any {
        switch (filter) {
            case 'ACTIVE':
                return todos.filter(todo => !todo.isCompleted);
            case 'COMPLETED':
                return todos.filter(todo => todo.isCompleted);
            default:
                return todos;
        }
    }
}
