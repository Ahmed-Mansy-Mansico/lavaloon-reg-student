import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import StudentRegistration  from './routes/student-registration/student-registration.component';
import "./App.css";

const App = () => {
	return (
		<Routes>
			<Route path='/registration' element={<Navigation />}>
				<Route index element={<Home />} />
				<Route path='products' element={<h1>products</h1>} />
				<Route path='student-registration/*' element={<StudentRegistration />} />
				<Route path='blog' element={<h1>blog</h1>} />
			</Route>
		</Routes>
	);
  };
  
  export default App;