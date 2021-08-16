import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title:any;

  Childform!:FormGroup;

  memberform!:FormGroup;

  childImage:any;

  membersImage:any;

  childswitch:boolean =false;

  memberswitch:boolean =false;


  constructor(private fb:FormBuilder){}

  /**BLOCK CODE DATA THIS MIGHT BE THE RESPONSE FROM THE SERVER AND ALL THIS CODE MUST TO THE SERVICE FOLDER */

  childrendata =[
    {id:1,name:'Frank kwame',telephone:'024654647736',images:'../assets/slider/avatar-01.jpg', description:'Profiling of children1'},
    {id:2,name:'Frank koofi',telephone:'024654643736',images:'../assets/slider/avatar-02.jpg', description:'Profiling of children2'},
    {id:3,name:'Frank Akwasi',telephone:'02465464775',images:'../assets/slider/avatar-03.jpg', description:'Profiling of children3'},
    {id:4,name:'Frank kwajo',telephone:'024654647736',images:'../assets/slider/avatar-04.jpg', description:'Profiling of children4'},
    {id:5,name:'Frank kuku',telephone:'024654647731',images:'../assets/slider/avatar-05.jpg', description:'Profiling of children5'},
    {id:6,name:'Frank kwakpe',telephone:'024654647095',images:'../assets/slider/avatar-05.jpg', description:'Profiling of children6'},
    {id:7,name:'Frank kwadasu',telephone:'02465465444',images:'../assets/slider/avatar-06.jpg', description:'Profiling of children7'},
    {id:8,name:'Francis kwame',telephone:'02465464666',images:'../assets/slider/avatar-07.jpg', description:'Profiling of children8'},
    {id:9,name:'Frank kwame',telephone:'0246546473333',images:'../assets/slider/avatar-08.jpg', description:'Profiling of children9'},
  ];

  memberdata =[
    {id:1,name:'Grace Qushie',telephone:'034654647736',images:'../assets/slider/avatar-13.jpg', description:'I love kid and willing to adopt one 1'},
    {id:2,name:'Akua Josphine',telephone:'044654647736',images:'../assets/slider/avatar-14.jpg', description:'I love kid and willing to adopt one 2'},
    {id:3,name:'Michael Boat',telephone:'054654647736',images:'../assets/slider/avatar-15.jpg', description:'I love kid and willing to adopt one 3'},
    {id:4,name:'Timo Jackson',telephone:'064654647736',images:'../assets/slider/avatar-19.jpg', description:'I love kid and willing to adopt one 4'},
    {id:5,name:'Willams Amaho',telephone:'074654647736',images:'../assets/slider/avatar-21.jpg', description:'I love kid and willing to adopt one 5'},
    {id:6,name:'Frank kwakpe',telephone:'084654647736',images:'../assets/slider/avatar-22.jpg', description:'I love kid and willing to adopt one 6'},
    {id:7,name:'Frank kwadasu',telephone:'094654647736',images:'../assets/slider/avatar-24.jpg', description:'I love kid and willing to adopt one 7'},
    {id:8,name:'Francis kwame',telephone:'024654647736',images:'../assets/slider/avatar-26.jpg', description:'I love kid and willing to adopt one 8'},
  ];



  getMembersByFind(id:any){
    return this.memberdata.find(x => x.id === id);
  }

  getChildByFind(id:any){
    return this.childrendata.find(x => x.id === id);
  }

  /**END OF BLOCK */


  // getting post by event click

  getUserId(Id:any)
  {
    this.childswitch = true;
    const holdata = this.getChildByFind(Id);
    this.childImage = holdata?.images;
    this.Childform.patchValue({
      childName:holdata?.name,
      childTelephone:holdata?.telephone,
      description:holdata?.description,
      childId:holdata?.id
    });

    
  }

  // getting post by event click

  getMembersId(Id:any)
  {
    this.memberswitch = true;
    const holdata = this.getMembersByFind(Id);
    this.membersImage = holdata?.images;
    this.memberform.patchValue({
      childName:holdata?.name,
      childTelephone:holdata?.telephone,
      description:holdata?.description,
      memberId:holdata?.id
    });
  }


  // match post script

  OnMatchChild()
  {
    // haversting post request
    const formdata = new FormData();
    formdata.append('childId',this.Childform.value.childId);
    formdata.append('memberId',this.Childform.value.memberId);
    // connect your backend script here for post request
    // sending child Id and member to Match Table with has relationship with childTable and members Table
  }



  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.Childform = this.fb.group({
      childName:[],
      childTelephone:[],
      description:[],
      childId:[]
    });

    this.memberform = this.fb.group({
      childName:[],
      childTelephone:[],
      description:[],
      memberId:[]
    });
    
  }
  

}
