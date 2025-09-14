function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full text-center py-8 text-sm text-stone-500">
      <p>&copy; {currentYear} Sabri Siraj Kholbi. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
