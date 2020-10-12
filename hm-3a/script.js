let year = process.argv[2];

switch(year % 12) {
    case 0: 
      console.log(`${year} - год обезьяны`);
      break;

    case 1: 
      console.log(`${year} - год петуха`);
      break;

    case 2: 
      console.log(`${year} - год собаки`);
      break;

    case 3: 
      console.log(`${year} - год свиньи`);
      break;

    case 4: 
      console.log(`${year} - год крысы`);
      break;

    case 5: 
      console.log(`${year} - год быка`);
      break;

    case 6: 
      console.log(`${year} - год тигра`);
      break;

    case 7: 
      console.log(`${year} - год кролика`);
      break;

    case 8: 
      console.log(`${year} - год дракона`);
      break;

    case 9: 
      console.log(`${year} - год змеи`);
      break;

    case 10: 
      console.log(`${year} - год лошади`);
      break;  

    case 11: 
      console.log(`${year} - год собаки`);
      break;
    
    case 12: 
      console.log(`${year} - год козы`);
      break;

    default:
      console.log('введен не год');
  }
