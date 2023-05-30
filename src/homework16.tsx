//Задание 1
// Создайте тип для следующего объекта {title: "Berlin", population: 3_400_000, isCapital: true}
// После создайте константу с указанием этого типа

interface City {
    title: string,
    population: number,
    isCapital: boolean,
  }
  
  function newCityBerlin(): City {
    return {
      title: "Berlin",
      population: 3_400_000,
      isCapital: true,
    }
  }
  
  console.log(newCityBerlin());