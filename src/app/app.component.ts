import { Component } from '@angular/core';

export interface Information {
  firstName: string;
  lastName: string;
  department: string;
  salary: number;
  joiningDate: Date;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  inputSearch: string = '';

  allInfo: Information[] = [
    {
      firstName: 'John',
      lastName: 'Doe',
      department: 'Finance',
      salary: 5000,
      joiningDate: new Date('2015-12-11'),
    },
    {
      firstName: 'Amy',
      lastName: 'Watson',
      department: 'HR',
      salary: 8000,
      joiningDate: new Date('2013-07-23'),
    },
    {
      firstName: 'Bmy',
      lastName: 'Watson',
      department: 'HR',
      salary: 8000,
      joiningDate: new Date('2013-07-23'),
    },
    {
      firstName: 'Ymy',
      lastName: 'Watson',
      department: 'HR',
      salary: 8000,
      joiningDate: new Date('2013-07-23'),
    },
    {
      firstName: 'Umy',
      lastName: 'Watson',
      department: 'HR',
      salary: 5000,
      joiningDate: new Date('2013-07-23'),
    },
    {
      firstName: 'Wmy',
      lastName: 'Watson',
      department: 'HR',
      salary: 8000,
      joiningDate: new Date('2013-07-23'),
    },
    {
      firstName: 'Umy',
      lastName: 'Watson',
      department: 'HR',
      salary: 8000,
      joiningDate: new Date('2013-07-23'),
    },
    {
      firstName: 'Shrishti',
      lastName: 'Sharma',
      department: 'IT',
      salary: 10000,
      joiningDate: new Date('2019-10-20'),
    }
  ];
}
