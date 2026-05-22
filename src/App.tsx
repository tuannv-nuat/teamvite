import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './views/dashboard'
import LunchVote from './views/lunch-vote'
import Ping from './views/ping'
import Fund from './views/fund'
import Breakfast from './views/breakfast'
import TopAppBar from './components/TopAppBar'
import BottomNavBar from './components/BottomNavBar'

function App() {
  return (
    <BrowserRouter>
      <TopAppBar />
      <main className="pt-16 space-y-md px-margin-mobile">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/lunch-vote" element={<LunchVote />} />
          <Route path="/ping" element={<Ping />} />
          <Route path="/fund" element={<Fund />} />
          <Route path="/breakfast" element={<Breakfast />} />
        </Routes>
      </main>
      <BottomNavBar />
    </BrowserRouter>
  )
}

export default App