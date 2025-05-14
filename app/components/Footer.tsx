const Footer = () => {
    return (
      <footer className="bg-gradient-to-r from-primary-100 to-secondary-100 text-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center">
            <p>&copy; 2025 MCHS. Designed at PGR LTD.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary-600 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-secondary-600 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    )
  }
  
  export default Footer
  
  