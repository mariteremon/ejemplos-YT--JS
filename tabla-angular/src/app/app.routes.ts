import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Puesto } from 'puesto';
import { TableAngularP } from './table-angular-p';
import { Datos } from './datos';


export const routes: Routes = [
    {path: 'Personas', 
    component: Puesto
},
    
    {
    path: 'Puesto', 
    component: Datos, 
    }, 
     {
    path: 'empleadoPuesto',
    component: TableAngularP
    }
];
