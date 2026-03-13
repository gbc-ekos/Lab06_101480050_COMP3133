export class Customer{
    constructor(firstName: string, lastName: string, age: number){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    private firstName: string;
    private lastName: string;
    private age: number;

    public greeter(){
        console.log(`Hello ${this.firstName} ${this.lastName}`)
    }

    public getAge(): number {
        console.log(`${this.firstName} ${this.lastName} is ${this.age} years old`);
        return this.age;
    }
}

