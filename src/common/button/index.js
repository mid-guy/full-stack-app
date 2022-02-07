const TButton = ({children, onClick}) => {
  return (
      <button
        style={{ 
          background: 'none',
          border: 'solid white 1px',
          borderRadius: 10,
          padding: 0
        }}
        onClick={onClick}
      >
        <div 
          style={{ 
            padding: '10px 16px',
            color: 'white',
            fontSize: 14
          }}
        >
          {children}
        </div>
      </button>
  )
}
export default TButton