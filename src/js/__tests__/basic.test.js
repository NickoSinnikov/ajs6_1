import orderByProps from "../app";

test("should sort obj with correct order", () => {
  const obj = {
    name: "Zombie",
    health: 90,
    level: 5,
    attack: 40,
    defence: 10,
  };
  const order = ["name", "level"];
  const equalObj = [
    { key: "name", value: "Zombie" },
    { key: "level", value: 5 },
    { key: "attack", value: 40 },
    { key: "defence", value: 10 },
    { key: "health", value: 90 },
  ];
  expect(orderByProps(obj, order)).toEqual(equalObj);
});

test("should error with incorrect order", () => {
  const obj = {
    name: "Zombie",
    health: 90,
    level: 5,
    attack: 40,
    defence: 10,
  };

  const equalObj = [
    { key: "name", value: "Zombie" },
    { key: "attack", value: 40 },
    { key: "defence", value: 10 },
    { key: "health", value: 90 },
    { key: "level", value: 5 },
  ];
  const order = ["name", "type"];
  expect(orderByProps(obj, order)).toEqual(equalObj);
});

test("test for property from Object.prototype", () => {
  const obj = Object.create({ name: "Zombie" });
  const order = ["name", "type"];
  expect(orderByProps(obj, order)).toEqual([undefined]);
});
