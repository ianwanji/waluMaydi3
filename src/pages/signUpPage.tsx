// import { useState } from 'react';
// import { category, PrismaClient } from '@prisma/client';
// import { useEffect } from "react";


// const prisma = new PrismaClient();

// interface FormValues {
//   description: string;
//   location: string;
//   category: string;
// }

// function App() {
//   const [formValues, setFormValues] = useState<FormValues>({
//     description: '',
//     location: '',
//     category: '',
//   });
//   const [categories, setCategories] = useState<category[]>([]);

//   async function fetchCategories() {
//     try {
//       const categories = await prisma.category.findMany();
//       setCategories(categories);
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
//     const { name, value } = event.target;
//     setFormValues({ ...formValues, [name]: value });
//   }

//   function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
//     event.preventDefault();
//     console.log(formValues);
//   }

//   useEffect(() => {
//     fetchCategories();
//   }, []);

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="description">Description:</label>
//         <input type="text" id="description" name="description" value={formValues.description} onChange={handleChange} />
//       </div>
//       <div>
//         <label htmlFor="location">Location:</label>
//         <input type="text" id="location" name="location" value={formValues.location} onChange={handleChange} />
//       </div>
//       <div>
//         <label htmlFor="category">Category:</label>
//         <select id="category" name="category" value={formValues.category} onChange={handleChange}>
//           <option value="">Select a category</option>
//           {categories.map((category) => (
//             <option key={category.category_id} value={category.category_name}>
//               {category.category_name}
//             </option>
//           ))}
//         </select>
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default App;