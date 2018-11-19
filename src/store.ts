import { observable, action, computed } from 'mobx';

interface Employee {
    name: string;
    salary: number;
}

export default class Store {
    
    @observable
    public employeeList: Employee[] = [
        {
            name: 'John Doe', 
            salary: 100
        }, 
        {
            name: 'Richard Roe',
            salary: 300
        },
    ];

    @computed
    public get totalSum() {
        let sum = 0;
        this.employeeList.map((e) => sum = sum + e.salary);
        return sum;
    }

    @action
    public addEmployee(employee: Employee) {
        this.employeeList.push(employee);
    }

    @action
    public clearAll() {
        this.employeeList = [];
    }
}