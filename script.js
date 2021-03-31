
function ProgramNo1()
{
document.write('---------------Program No: 1---------------');
let student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 };

    document.write( '<br>' + '...........Object Properties...........' + '<br>');
    document.write( '<br>' + 'Student Name: ' + student.name + '<br>' );
    document.write( '<br>' + 'Studen Class: ' + student.sclass + '<br>');
    document.write('<br>' + 'Student Roll Number: ' + student.rollno + '<br>');

}

function  ProgramNo2()
{
document.write('---------------Program No: 2---------------');
let student2 = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 };
document.write('<br>' + '.....Object Before Delete Property.....' + '<br>');
document.write('<br>' + 'Student Name: ' + student2.name  + '<br>');
document.write('<br>' + 'Studen Class: ' + student2.sclass  + '<br>');
document.write('<br>' + 'Student Roll Number: ' + student2.rollno + '<br>' );
document.write('<br>' + '.....Object After Delete Property.....' + '<br>');
delete student2.rollno;
document.write('<br>' + 'Student Name: ' + student2.name  + '<br>');
document.write('<br>' + 'Studen Class: ' + student2.sclass  + '<br>');
document.write('<br>' + 'Student Roll Number: ' + student2.rollno  + '<br>');
}

function ProgramNo3()
{
document.write( '---------------Program No: 3---------------' + '<br>');
let student3 = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 };

    document.write('<br>' +'..........Length of Object.........' + '<br>');
    let tempStudent =Object.keys(student3).length;
    document.write('<br>' +'Length of Object : ' + tempStudent + '<br>');

}

function ProgramNo4()
{
    document.write('<br>' +'---------------Program No: 4---------------'  + '<br>');
    let library = [ 
        {
            author: 'Bill Gates',
            title: 'The Road Ahead',
            readingStatus: true
        },
        {
            author: 'Steve Jobs',
            title: 'Walter Isaacson',
            readingStatus: true
        },
        {
            author: 'Suzanne Collins',
            title:  'Mockingjay: The Final Book of The Hunger Games', 
            readingStatus: false
        }];
        document.write('<br>' +'Length of Array Library: ' + library.length + '<br>');
        for(var i=0 ; i < library.length;i++)
        {
            document.write('<br>' +'Object Index ' + i + ' Author Index: ' + i +' : ' + library[i].author  + '<br>');
            document.write('<br>' +'Object Index ' + i + ' Title Index: ' + i + ' : ' +library[i].title  + '<br>');
            document.write('<br>' +'Object Index ' + i + ' Reading Index: ' +  i + ' : ' + library[i].readingStatus + '<br>');
        }

}

function ProgramNo5()
{
    document.write('<br>' +'---------------Program No 5---------------'  + '<br>');
 document.write('<br>' + 'Volume of a cylinder : V = πr^2h' + '<br>');

        let volOfCylinder = {
            hei: 10 ,
            rad: 4 ,
            pi : 3.1428
        };

        document.write('<br>' +'Entered Height:  ' + volOfCylinder.hei + '<br>');
        document.write('<br>' +'Entered Radius:  ' + volOfCylinder.rad  + '<br>');
        document.write('<br>' +'Constant Value of PI:  ' + volOfCylinder.pi  + '<br>');
        document.write('<br>' +'..........Calculation of Volume of Cylinder..........'  + '<br>');
        var tempVolume = volOfCylinder.hei * ( volOfCylinder.rad * volOfCylinder.rad) * volOfCylinder.pi ;
        tempVolume = tempVolume.toFixed(4)
        document.write('<br>' +'Calculated Volume of Cylinder: ' +  tempVolume  + '<br>' )

}

function ProgramNo6()
{
    document.write('<br>' +'---------------Program No 6---------------' + '<br>');
    document.write('<br>' +'Bubble Sort' + '<br>');
 let arr = [6,4,0, 3,-2,1];
 document.write('<br>' +'Array Before Bubble Sort: ', arr  + '<br>');
 var tempBubble;
 for(var i=0 ; i < arr.length ; i++)
 {
     for(var j=0 ; j < arr.length-1 ; j++)
     {
         if(arr[j] > arr[j+1])
         {
             tempBubble = arr[j];
             arr[j] = arr[j+1]
             arr[j+1] = tempBubble;
         }
     }
 }
 document.write('<br>' +'.....Array after Bubble Sort.....' + '<br>' );

 for(var i =0 ; i < arr.length ; i++ )
 {
    document.write('<br>' +"Index: "+ i + ' Output ' + arr[i] + '<br>');
 }

}
function ProgramNo7() {
 document.write('---------------Program No 7---------------');

 document.write( '<br>' + 'Sample String Data: dog' + '<br>');
 let sampleString  = 'dog' ;
 document.write( '<br>' + 'Length of String: ' + sampleString.length)

 document.write('<br>' + 'Subset of String: '  + sampleString.substring(0 , 1) + '<br>');
 document.write('<br>' + 'Subset of String: '  + sampleString.substring(1 , 2) + '<br>');
 document.write('<br>' + 'Subset of String: '  + sampleString.substring(2 , 3) + '<br>');
 document.write('<br>' + 'Subset of String: '  + sampleString.substring(0 , 2) + '<br>');
 document.write('<br>' + 'Subset of String: '  + sampleString.substring(0 , 3) + '<br>');
 document.write('<br>' + 'Subset of String: '  + sampleString.substring(1 , 3) + '<br>');
}

function ProgramNo8()
{
    document.write('---------------Program No 8---------------' + '<br>')

    var time = new Date();
    var hour = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();

    document.write( '<br>' + hour + ':' + min + ":"  + sec )
   


}

function ProgramNo9()
{
    document.write('---------------Program No 9---------------' + '<br>')
    document.write( '<br>' +'Calculate Area  and Perimeter of Circle' + '<br>')
    document.write( '<br>' +'Formula for Area of Circle:  (PI) r^2' + '<br>')
    document.write( '<br>' +'Formula for Perimeter or Circumference of Circle:  2 (PI) r' + '<br>')
    let rCircle = 5 ;
    let pie = 3.1428 ;
    document.write( '<br>' +'Value of Radius of Circle: ' + rCircle +' <br>');
    document.write( '<br>' +'Value of Constant of PI: ' + pie  +' <br>');
    document.write( '<br>' +'__________Calculation__________ ' + ' <br>');

    document.write('<br>' +'Area of Circle: ' + pie * (rCircle * rCircle)  +' <br>');
    document.write('<br>' +'Perimeter and Circumference of Circle: ' + (2 * pie * rCircle).toFixed(2)   +' <br>');

}

function ProgramNo10()
{
    document.write('---------------Program No 10---------------' + '<br>')

    document.write('<br>' + "Sample Object is Given " + '<br>')
let library = [ 
   {
       title:  'The Road Ahead',
       author: 'Bill Gates',
       libraryID: 1254
   },
   {
       title: 'Walter Isaacson',
       author: 'Steve Jobs',
       libraryID: 4264
   },
   {
       title: 'Mockingjay: The Final Book of The Hunger Games',
       author: 'Suzanne Collins',
       libraryID: 3245
   }];


   document.write('<br>' + "Total Length of Array Objects : " + library.length + '<br>') 
   let temp ;
   for(var i =0 ; i < library.length ; i++ )
 {
       for(var j = 0 ; j < 2 ; j++)
       {
           if(library[j].libraryID < library[j+1].libraryID )
           {
               temp = library[j].libraryID ;
               library[j].libraryID = library[j+1].libraryID;
               library[j+1].libraryID = temp ;
           }
       }
  }

   document.write('<br>  ____________________________________________________ ' )  

   for(var i=0 ; i < library.length ; i++)
   {
    document.write('<br>' +'Object Index ' + i + ' Author Index: ' + i +' : ' + library[i].title  + '<br>');
    document.write('<br>' +'Object Index ' + i + ' Title Index: ' + i + ' : ' +library[i].author  + '<br>');
    document.write('<br>' + '<b>' +'Object Index ' + i + ' Reading Index: ' +  i + ' : ' + library[i].libraryID + '</b>' +' <br>');
    document.write('  ____________________________________________________ ' )  

   }
}


function ProgramNo11()
{
    document.write('---------------Program No 11---------------' + '<br>')

    document.write('<br>' + "Sample Object is Given " + '<br>')

    var obj ={
        method_one:1,
        method_two:2 ,
        method_three: 3 ,
        method_four: 4 ,
        method_five: 5
    };

    document.write('<br>' + 'All Methods in Javascript Creating Object' + '<br>');
    document.write( " "+ Object.getOwnPropertyNames(obj)  + " ")
}

function ProgramNo12()
{
    document.write('---------------Program No 12---------------' + '<br>')

    document.write('<br>' + "Sample Data is Given " + '<br>');
    var data = document.createElement('a');
    data.href = 'https://www.youtube.com/watch?v=MhLkBfo7bJk';
    document.write( '<br>' + data.href + '<br>');
    document.write('<br>'+'Protocol: ' + data.protocol + '<br>')
    document.write('<br>'+ 'Hostname: ' + data.hostname + '<br>')
    document.write('<br>'+ 'Port: ' + data.port + '<br>')
    document.write('<br>'+ 'Pathname: ' + data.pathname + '<br>')
    document.write('<br>'+'Search: ' + data.search + '<br>')
    document.write('<br>' +'Hash: ' + data.hash + '<br>')
    document.write('<br>' + 'Host: ' + data.host + '<br>')
}

function ProgramNo13()
{
    document.write('---------------Program No 13---------------' + '<br>')

    document.write('<br>' + "Sample Data is Given " + '<br>');
  
    var obj ={
        Property_one:1,
        Property_two:2 ,
        Property_three: 3 ,
        Property_four: 4 ,
        Property_five: 5
    };

    document.write('<br>' + 'All Properties in Javascript  Object' + '<br>');
    document.write( " "+ Object.getOwnPropertyNames(obj)  + " ")

}

function ProgramNo14()
{
    document.write('---------------Program No 14---------------' + '<br>')

    document.write('<br>' + "Sample Object is Given " + '<br>');

    var obj = {
        Property_one:"Value of Property 1",
        Property_two:"Value of Property 2",
        Property_three: "Value of Property 3" ,
        Property_four: "Value of Property 4" ,
        Property_five: "Value of Property 5"

    }
  
    document.write( '<br>' + 'Values of All Properties of Object' + '<br>')
    document.write('<br>' + Object.values(obj) + '<br>');

}

function ProgramNo15()
{
    document.write('---------------Program No 15---------------' + '<br>')

    document.write('<br>' + "Sample Object is Given " + '<br>');

    var obj = {
        one: 1 ,
        two: 2 ,
        three: 3 ,
        four: 4 ,
        five: 5 
    }

    document.write('<br>' + "Object in [Key , Pair] Values " + '<br>');
    document.write('<br>' + "    " + Object.entries(obj) + '<br>');

    document.write( '<hr>' +'<br>' + "Output is in Document.write method so output does not look like Array[key , value] pairs")
}

function ProgramNo16()
{
    document.write('---------------Program No 16---------------' + '<br>')

    document.write('<br>' + "Sample Object is Given " + '<br>');

    const data = {
        A: 1,
        B: 2,
        C: 3,
        D: 4
      }
      console.log(Object.entries(data));

      const newData = Object.keys(data).reduce(myFun, );
      console.log(newData);

      function myFun(obj , key)
      {
          obj[data[key]] = key ;
          return obj ;
      }

      
}

function ProgramNo17()
{
    document.write('---------------Program No 17---------------' + '<br>')

    document.write('<br>' + "Sample Object is Given " + '<br>');

    var obj = {
        A: 1,
        B: 2,
        C: 3,
        D: 4
    }

    document.write("<br> " + 'Check for Specific Property Exist in Object or Not' + '<br>');

    document.write('<br> ' + 'Total Properties in Object: ' +  Object.getOwnPropertyNames(obj)  + '<br>');
    
    var enterVar = prompt("Please Enter For Check");
   if( obj.hasOwnProperty(enterVar) == true) 
   {
       document.write("<br>" + 'This Specific Property you Entered is Exist' + '<br>');
   }
   else
   {
    document.write("<br>" + 'This Specific Property you Entered is Not Exist' + '<br>');
   }

}


function ProgramNo18()
{
    document.write('---------------Program No 1---------------' + '<br>')

    document.write('<br>' + "Sample Object is Given " + '<br>');

    
    let is_date = function (input) {
        if (Object.prototype.toString.call(input) === "[object Date]")
          return true;
        return false;
      };

      document.write('<br>' +      is_date("October 13, 2014 11:13:00") + '<br>');
      document.write('<br>' +is_date(new Date(86400000)) + '<br>');
      document.write('<br>' +is_date(new Date(99,5,24,11,33,30,0)) + '<br>');
      document.write('<br>' +is_date([1, 2, 4, 0]) + '<br>');
}

function ProgramNo19()
{
    document.write('---------------Program No 2---------------' + '<br>')

    document.write('<br>' + "Output of Date with Seperator" + '<br>');

    let currentDate = new Date();

    let month = currentDate.getMonth();
    let date = currentDate.getDate();
    let year = currentDate.getFullYear();

    document.write('<br>' + "Current Month Date Year Format "+ '<br>');

    document.write('<br>' + month + '/' + date + '/' + year + '<br>');
    document.write('<br>' + month + '-' + date + '-' + year + '<br>');
}

function ProgramNo20( month , year)
{
    document.write('---------------Program No 3---------------' + '<br>')

    document.write('<br>' + "Days in Specific Month " + '<br>');

        // let Year = prompt("Please Enter Year for Search");
        // let Month = prompt('Please Enter Month for Search')
    
        document.write('<br>' + "Days March 2021:  "+ new Date(2021, 3, 0).getDate() + '<br>');
        document.write('<br>' + "Days April 2021:  "+ new Date(2021, 4, 0).getDate() + '<br>');
        document.write('<br>' + "Days May 2021:  "+ new Date(2021, 5, 0).getDate() + '<br>');
        document.write('<br>' + "Days June 2021:  "+ new Date(2021, 6, 0).getDate() + '<br>');

    
}

function ProgramNo21()
{
    document.write('---------------Program No 4---------------' + '<br>')

    document.write('<br>' + "Name of Specific Month Enterd" + '<br>');

    // let monthNames = ['January' , 'Feburary' , 'March' , 'April' , 'March' , 'May' , 'June' , 'July' , 'August' , 'September' , 'November' , 'October' , 'December'];
    // let date1 = new Date();
    // let month1 = date1.getMonth();
    // console.log(month1);
    // console.log('Month of Specif Date: ' , monthNames[month1] );

    
    const date = new Date(2009, 10, 10);  
    const month = date.toLocaleString('default', { month: 'long' });
    document.write('<br>' + "Month of Specific Date: "+ month + '<br>');


    const date_one = new Date(2009, 12, 15);  
    const month_one = date_one.toLocaleString('default', { month: 'long' });
    document.write('<br>' + "Month of Specific Date: "+ month_one + '<br>');

    const date_two = new Date(2009, 8, 30);  
    const month_two = date_two.toLocaleString('default', { month: 'long' });
    document.write('<br>' + "Month of Specific Date: "+ month_two + '<br>');

}


function ProgramNo22()
{
    document.write('---------------Program No 5---------------' + '<br>')

    document.write('<br>' + "Comparison of Dates" + '<br>');

    
    var d1 = new Date('12 , 11 , 2000');
    var d2 = new Date('1 , 5 , 2012');

    document.write('<br>' + "Entered Date: " + d1 + '<br>');
    document.write('<br>' + "Entered Date: " + d2 + '<br>');

    if(d1.getTime() > d2.getTime())
    {
        
    document.write('<br>' + "Entered Date_One is Greater then Date_Two " + '<br>');

    }
    else
    {
    document.write('<br>' + "Entered Date_One is Greater then Date_Two" + '<br>');

    }
    
    var notSame = d1.getTime() !== d2.getTime();

}

function ProgramNo23()
{
    document.write('---------------Program No 6---------------' + '<br>')

    document.write('<br>' + "Comparison of Dates" + '<br>');
    document.write('<br>' + "20 Seconds are Increasing" + '<br>');


    let date = new Date(' 5 ,5 , 2020');
    let min = date.setMinutes(20);
    document.write('<br>' + date  + '<br>');

}

function ProgramNo24()
{
    document.write('---------------Program No 7---------------' + '<br>')
    document.write('<br>' + "Check Wether day is Weekend or Not" + '<br>');
    
    
    let dayName = ['Sunday' , 'Monday' , 'Tuesday' , 'Wednesday' , 'Thrusday' , 'Friday' , 'Saturday']
    var date = new Date('1,1,2020');

    document.write('<br>' + "Entered Date: " + date +'<br>');

    var day = date.getDay();
    

    if(day == 6 || day == 7)
    {
        
        document.write('<br>' + "This is Weekend Day " + day +'<br>');
    }
    else
    {
        document.write('<br>' + "This is Not Weekend Day " + day +'<br>');
        
    }
}

function ProgramNo25()
{
    document.write('---------------Program No 8---------------' + '<br>')
    document.write('<br>' + "Check for Differnce in Days" + '<br>');

    var date1 = new Date("5/5/2016");
    var date2 = new Date("10/1/2020");

    document.write('<br>' + "Entered Date1: " + date1 +'<br>');
    document.write('<br>' + "Entered Date2: " + date2 +'<br>');

    var diffDays = parseInt((date2 - date1) / (1000 * 60 * 60 * 24), 10); 

    document.write('<br>' + " Differnce of Days: " + diffDays + '<br>');
}

function ProgramNo26()
{
    document.write('---------------Program No 9---------------' + '<br>')
    document.write('<br>' + "Find last Day of Month" + '<br>');
    var d = new Date(2012,09,0);
    var n = d.getDate();
    
    document.write('<br>' + "Entered Date is:" + d +'<br>');

    document.write('<br>' + "Find last Day of a Specific Month" + '<br>');
  
    document.write('<br>' + " Last Day of Month: " + n + '<br>');

}

function ProgramNo27()
{
    document.write('---------------Program No 10---------------' + '<br>')
    document.write('<br>' + "Find the Yesterday" + '<br>');

    var days = ['Sunday', 'Monday' , 'Tuesday' , ' Wednesday' , ' Thrusday', 'Friday' , 'Saturday']
    var date = new Date('7 , 17, 2001');
    var day = date.getDay();
    let day_name = days[day]
    
    var pre_day = day - 1;
    let preDayName = days[pre_day]

    document.write('<br>' + "Entered Date is :" + date +'<br>');

    document.write('<br>' + "Current Day: " + day +'<br>');

    document.write('<br>' + "Current Day Name: " + day_name +'<br>');
    
    document.write('<br>' + "Previous Day: " + pre_day +'<br>');

    document.write('<br>' + "Previous Day Name: " + preDayName +'<br>');  
}


function ProgramNo28()
{
    document.write('---------------Program No 11---------------' + '<br>')
    document.write('<br>' + "Find Maximum Date" + '<br>');


    var dates = [new Date('2021/01/2'), new Date('2021/02/3') , new Date('2021/08/10') , new Date('2021/07/9'), new Date('2021/07/27') , new Date('2021/11/6') ];

    var maxDate;
    for(var i =0 ; i< dates.length ; i++)
    {
    
    document.write('<br>' + "Entered Dates are: " + dates[i] +'<br>');  
     maxDate = Math.max(dates[i]);

    }

    
    
    document.write('<br>' + "Maximum Date: " + maxDate +'<br>');  

    
    document.write( '<br>' + '<hr>' + '<br>');
}

function ProgramNo29()
{
    document.write('---------------Program No 12---------------' + '<br>')
    document.write('<br>' + "Find Minimum Date" + '<br>');


    var dates = [new Date('2021/01/2'), new Date('2021/02/3') , new Date('2021/08/10') , new Date('2021/07/9'), new Date('2021/07/27') , new Date('2021/11/6') ];

    var minDate;
    for(var i =0 ; i< dates.length ; i++)
    {
    
    document.write('<br>' + "Entered Dates are: " + dates[i] +'<br>');  
     minDate = Math.min(dates[i]);

    }

    
    
    document.write('<br>' + "Maximum Date: " + minDate +'<br>');  

    
    document.write( '<br>' + '<hr>' + '<br>');
}



function ProgramNo30()
{
    document.write('---------------Program No 13---------------' + '<br>')
    document.write('<br>' + "Find Hours and Minutes from Ented Value" + '<br>');

    function minutes(value)
    {
    // var value = 200 ;
    var hour = Math.trunc(value / 60);
    var min = value % 60 ;

    document.write('<br>' + "Entered Value is: " + value + '<br>');

    document.write('<br>' + hour + ' Hours  : ' + min + ' Minutes' + '<br>');
    }

    minutes(200)
    minutes(400)
    minutes(600)
}


function ProgramNo31()
{
    document.write('---------------Program No 14---------------' + '<br>')
    document.write('<br>' + "Total Days in a Year" + '<br>');

    function daysInYear(year) {
        return ((year % 4 === 0 && year % 100 > 0) || year %400 == 0) ? 366 : 365;
    }

    document.write('<br>' + "Days in Year 2017:   " + daysInYear(2017)+" Days" + '<br>');
    document.write('<br>' + "Days in Year 2018:   " + daysInYear(2018) + " Days" + '<br>');
    document.write('<br>' + "Days in Year 2019:   " + daysInYear(2019) + " Days"+ '<br>');
    document.write('<br>' + "Days in Year 2020:   " + daysInYear(2020) + " Days"+'<br>');
    document.write('<br>' + "Days in Year 2021:   " + daysInYear(2021) +" Days" +'<br>');

}


function ProgramNo32()
{
    document.write('---------------Program No 15---------------' + '<br>')
    document.write('<br>' + "Find Quater of the Year" + '<br>');


    var temp = prompt('Please Enter Date with Follow Date Format and Seprate with / or ,');
    var date = new Date(temp);
    var month = date.getMonth();
    var year = date.getFullYear();
    var quater = Math.floor((date.getMonth() + 3) / 3);
    
    document.write('<br>' + "Entered Date:   " + date + '<br>');
    document.write('<br>' + "Month of the Year:   " + month + '<br>');
    document.write('<br>' + "Year:   " + year + '<br>' + '<hr>');



    document.write('<br>' + "Quater of the Year:   " + quater + '<br>');
}




function ProgramNo33()
{
     document.write('---------------Program No 16---------------' + '<br>')
     document.write('<br>' + "Calculate passed Days is a Year since now date" + '<br>');



      function daysInYear(year) 
      {
        return ((year % 4 === 0 && year % 100 > 0) || year %400 == 0) ? 366 : 365;
      }

      var totalDays =  daysInYear(2021);
      
      document.write('<br>' + "Total Days in Year: " + totalDays + '<br>');



      function days (d) 
      {
        return Math.ceil((new Date(d.getTime())-new Date(d.getFullYear(), 0, 1))/86400000);
      }

      var passedDays =  days(new Date(2020, 4, 15))
      
       document.write('<br>' + "Total Passed Days in this Year: " + passedDays + '<br>');


      var remainDays = totalDays - passedDays ;
      
      document.write('<br>' + "Remaining Days in this Year: " + remainDays + '<br>' + '<hr>');
   
}

function ProgramNo34()
{
     document.write('---------------Program No 17---------------' + '<br>')
     document.write('<br>' + "Calculate Date of Birth" + '<br>');
}



function ProgramNo35()
{
     document.write('---------------Program No 18---------------' + '<br>')
     document.write('<br>' + "Calculate Date of Birth" + '<br>');

    var dob = new Date('7 / 17 / 2001');
    document.write('<br>' + "Entered Date of Birth: " + " 17 July 2001" + '<br>' );

    var monthDiffer = Date.now() - dob.getTime() ;

    var dateDiffer = new Date(monthDiffer);
    var year = dateDiffer.getUTCFullYear();

    var age = Math.abs(year - 1970);

    document.write('<br>' + "Date of Birth: " + age + ' Years Old' +'<br>' + '<hr>');
    
}

function ProgramNo36()
{
     document.write('---------------Program No 19---------------' + '<br>')
     document.write('<br>' + "Start of Week and not" + '<br>');

    var today = new Date('12 / 26 / 2001');

    document.write('<br>' + 'Entered Date is: ' + today + '<br>' );

    document.write('<br>' + 'Day is: ' + today.getDay() + '<br>' );

    
    if(today.getDay() == 1 )

    {
        
        document.write('<br>' + 'Entered Date is Start of Week' + '<br>' );

    }
    else
    {
        
        document.write('<br>' + 'Entered Date is not start of week' + '<br>' );

    }
}

function ProgramNo37()
{
     document.write('---------------Program No 20---------------' + '<br>')
     document.write('<br>' + "End of Week or Not" + '<br>');

    var today = new Date('7 / 17 / 2001');

    document.write('<br>' + 'Entered Date is: ' + today + '<br>' );

    document.write('<br>' + 'Day is: ' + today.getDay() + '<br>' );

    
    if(today.getDay() == 6 || today.getDay() == 0)

    {
        // console.log('WeekEnd');
        document.write('<br>' + 'Entered Date is Weekend' + '<br>' );

    }
    else
    {
        // console.log('Not Weekend');
        document.write('<br>' + 'Entered Date is not Weekend' + '<br>' );

    }
}

function ProgramNo37()
{
     document.write('---------------Program No 20---------------' + '<br>')
     document.write('<br>' + "Current Start of the Month Date" + '<br>');


    var date = new Date();
    document.write('<br>' + 'Entered Date is: ' + date + '<br>' );

    var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    document.write('<br>' + 'Start date of the Current Month:  ' + firstDay + '<br>' + '<hr>' );


 
}

function ProgramNo38()
{
     document.write('---------------Program No 21---------------' + '<br>')
     document.write('<br>' + "Current End of the Month Date" + '<br>');


    var date = new Date();
    document.write('<br>' + 'Entered Date is: ' + date + '<br>' );

    var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    document.write('<br>' + 'End date of the Current Month:  ' + lastDay + '<br>' + '<hr>' );

}

function ProgramNo39()
{
     document.write('---------------Program No 22---------------' + '<br>')
     document.write('<br>' + "Differences in days between two dates" + '<br>');

     function dateDiffInDays(date1, date2) {

        return Math.round((date2-date1)/(1000*60*60*24));
    }
    var daysDiff=dateDiffInDays(new Date('July 17, 2001 03:24:00'), new Date('December 26, 2001 03:24:00')); //4 days till XMAS
    
    document.write('<br>' + 'Entered Date is: July 17, 2001 03:24:00'  + '<br>' );
    document.write('<br>' + 'Entered Date is: December 26, 2001 03:24:00'  + '<br>' );

    

    document.write('<br>' + 'Diiference Between Two Dates is:  ' + daysDiff + '  Days'  +'<br>' + '<hr>' );

}

function ProgramNo40()
{
     document.write('---------------Program No 23---------------' + '<br>')
     document.write('<br>' + "Differences in Weeks between two dates" + '<br>');

     function dateDiffInDays(date1, date2) {

        return Math.round((date2-date1)/(1000*60*60*24*7));
    }
    var weeksDiff=dateDiffInDays(new Date('July 17, 2001 03:24:00'), new Date('December 26, 2001 03:24:00')); //4 days till XMAS
    
    document.write('<br>' + 'Entered Date is: July 17, 2001 03:24:00'  + '<br>' );
    document.write('<br>' + 'Entered Date is: December 26, 2001 03:24:00'  + '<br>' );

    document.write('<br>' + 'Diiference Between Two Dates is:  ' + weeksDiff + '  Weeks'+'<br>' + '<hr>' );

}




