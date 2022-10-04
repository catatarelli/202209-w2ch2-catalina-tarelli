import strictEquals from "./strictEquals.js";

strictEquals(NaN, NaN);
strictEquals(0, -0);
strictEquals(-0, 0);
strictEquals("1", 1);
strictEquals(true, false);
strictEquals(false, false);
strictEquals("oil", "water");
strictEquals(5, 5);
strictEquals(6, 5);
