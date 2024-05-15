

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            {children}
            &copy; Nexy JS is Great!
        </div>
  );
}
