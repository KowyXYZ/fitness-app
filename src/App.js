import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import RootLayout from './Layouts/RootLayout'
import Home from './Pages/Home'
import ExerciseSingle, { singleExerciseLoader } from "./Components/Exercises/ExerciseSingle";
function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout/>}>
        <Route index element={<Home/>}/>
        <Route path="/exercises/:id" element={<ExerciseSingle/>} loader={singleExerciseLoader}/>
      </Route>
    )
  )


  return (
    <RouterProvider router={router}/>
  );
}



export default App;
