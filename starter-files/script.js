// API
const API_ENDPOINT = 'https://yesno.wtf/api';

/**
 * STEPS:
 *
 * 1. Create a fetchAnswer function and call the API
 * 2. Output the API's response
 * 3. Attach fetchAnswer to an event listener
 * 4. Clear output after 3 seconds
 * 5. Optional: add loading/error states
 *
 */

//Step 1. Create a fetchAnswer function and call the API
async function fetchAnswer() {
    try {
      //Primero llamo a la API
      const response = await fetch(API_ENDPOINT);
  
      //Posteriorment con 'response.ok' verifico si la respuesta fue exitosa
      if (!response.ok) {
        
      }
    }
}

addEventListener()=>
