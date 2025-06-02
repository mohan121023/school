import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewInquiryComponent } from '../Admission/new-inquiry/new-inquiry.component';



@Component({
  selector: 'app-all-form',
  imports: [FormsModule, CommonModule, NewInquiryComponent],
  templateUrl: './all-form.component.html',
  styleUrl: './all-form.component.css'
})

export class AllFormComponent {

  formData: any = {
    sn: '',
    academicYear: '',
    headName: '',
    account: '',
    component: '',
    cycleType: '',
    value: '',
    valueType: '',
    date: '',
    createdBy: ''
  };

  tableData: any[] = [];

   onSubmit() {
    // Push a clone of formData into tableData
    this.tableData.push({ ...this.formData });

    // Reset form fields
    this.formData = {
      sn: '',
      academicYear: '',
      headName: '',
      account: '',
      component: '',
      cycleType: '',
      value: '',
      valueType: '',
      date: '',
      createdBy: ''
    };
  }

  examFormData = {
    sn: '',
    academicYear: '',
    headName: '',
    account: '',
    component: '',
    value: '',
    valueType: '',
    date: '',
    createdBy: '',
    marks: '',
    examDate: '',
  };

  examTableData: any[] = [];

   onExamSubmit() {
    // Add current form data to the table
    this.tableData.push({ ...this.formData });

    // Optional: reset form
    this.formData = {
      sn: '',
      academicYear: '',
      headName: '',
      account: '',
      component: '',
      value: '',
      valueType: '',
      date: '',
      createdBy: '',
      marks: '',
      examDate: '',
    };
  }

  examGradeFormData = {
    sn: '',
    academicYear: '',
    classname: '',
    adminno: '',
    examno: '',
    examname: '',
    subjectname: '',
    grade: '',
    skill: '',
    
  };


  onExamGradeSubmit(){

    this.tableData.push({...this.formData});


  }


  users = [
    { name: 'John Doe', email: 'john@example.com', signup: new Date('2025-01-15'), active: true },
    { name: 'Jane Smith', email: 'jane@example.com', signup: new Date('2025-02-20'), active: false },
    { name: 'Michael Lee', email: 'michael@example.com', signup: new Date('2025-03-05'), active: true },
  ];

  lineChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      { data: [65, 59, 80, 81, 56, 55], label: 'Sales' }
    ]
  };

  lineChartOptions = {
    responsive: true,
    scales: {
      y: { beginAtZero: true }
    }
  };

}
