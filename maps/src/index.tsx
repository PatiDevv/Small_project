import React from "react";
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";
import { User } from "./User";

// import { Company } from "./Company";
// import { User } from "./User";

// const user = new User();
// const company = new Company();
// console.log(user, company);

const customMap = new CustomMap("map");
const user = new User();
const company = new Company();

customMap.addMarker(user);
customMap.addMarker(company);
