import Header from "@/components/Header";

export default function WorkLayout({
    children,
  }:{
    children: React.ReactNode;
  }) {
    return (
      
        <>
          <Header>
            
          </Header>
          <main>
            {children}
          </main>
          {/* Footer goes here */}
        </>
      
    );
  }