import Header from './components/Header';
import Footer from './components/Footer';

export default function App({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-800">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
