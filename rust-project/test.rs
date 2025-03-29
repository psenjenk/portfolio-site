use std::io;

fn main() {
    let mut name = String::new();
    let mut age = String::new();

    println!("Enter your name:");
    io::stdin().read_line(&mut name).expect("Failed to read line");

    println!("Enter your age:");
    io::stdin().read_line(&mut age).expect("Failed to read line");

    println!("Your name is {} and you are {} years old.", name.trim(), age.trim());

    let mut reset = String::new();
    println!("Press R to reset your name and age, or any other key to continue:");
    io::stdin().read_line(&mut reset).expect("Failed to read line");

    if reset.trim() == "R" {
        name = String::new();
        age = String::new();

        println!("Your name and age have been reset.");
    } else {
        println!("Your name and age have not been reset.");
    }
}
