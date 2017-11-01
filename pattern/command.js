class CarManager {
    requestInfo(model, id) {
        return `The information for ${model} with ID ${id} is foobar`;
    }

    buyVehicle(model, id) {
        return `You have successfully puchased item ${id}, a ${model}`;
    }

    arrangeViewing(model, id) {
        return `You have successfully booked a viewing of ${model} (${id})`;
    }

    execute(name) {
        let carManager = new CarManager();
        return carManager[name] && carManager[name].apply(carManager, [].slice.call(arguments, 1));
        // return carManager[name]&&carManager[name]([].slice.call(arguments,1));
    }
}

function carManagerTests() {
    let carManager = new CarManager();
    console.log(carManager.execute("arrangeViewing", "Ferrari", "14523"));
    console.log(carManager.execute("requestInfo", "Ford Mondeo", "54323"));
    console.log(carManager.execute("buyVehicle", "Ford Escort", "34232"));
}

carManagerTests();