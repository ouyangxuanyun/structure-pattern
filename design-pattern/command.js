/**
 * 命令行模式:
 * 类似控制台输入命令的方式。说白点就是我们只使用一个方法，第一个参数是我们实际调用的方法，后面的参数是作为该调用方法的参数。
 */
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