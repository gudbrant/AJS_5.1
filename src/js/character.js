export default class Character {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;

    const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

    if (typeof (name) !== 'string' || name.length < 2 || name.length > 10) {
      throw new Error('Некорректное имя!');
    };

    if (typeof (type) !== 'string' || types.includes(type) === false) {
      throw new Error('Некорректный класс!');
    };
  };
}