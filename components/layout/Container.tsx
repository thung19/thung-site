type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`mx-auto max-w-280 px-6 md:px-12 ${className}`}>
      {children}
    </div>
  );
}
