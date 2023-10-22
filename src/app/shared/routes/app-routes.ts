import { Routes } from "@angular/router";
import { HomeComponent } from "src/app/modules/home/home.component";
import { AboutUsComponent } from "src/app/modules/about-us/about-us.component";

export const appRoutes: Routes = [
    {
        path: "home",
        component:  HomeComponent
    },
    {
        path: "about-us",
        component: AboutUsComponent
    }
];

