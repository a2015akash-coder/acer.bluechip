export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-gray-900 py-12 text-gray-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4 flex items-center gap-4">
              <span className="text-2xl font-bold tracking-tighter text-white">
                acer
              </span>
              <div className="h-6 w-px bg-gray-700" />
              <span className="text-xl font-bold tracking-tight text-white">
                Bluechip
              </span>
            </div>
            <p className="max-w-sm text-sm">
              Bluechip Infotech is an Authorised Distributor of Acer commercial
              products in Australia. We provide channel partners with enterprise
              hardware, logistics, and financial solutions.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-white">
              Contact
            </h4>
            <ul className="space-y-2 text-sm">
              <li>1300 123 456</li>
              <li>sales@bluechipit.com.au</li>
              <li>Unit 1, 23 Business Park Dr</li>
              <li>Sydney, NSW 2000</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-white">
              Legal
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Terms of Trade
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Warranty Information
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between border-t border-gray-800 pt-8 text-xs md:flex-row">
          <p>
            &copy; {new Date().getFullYear()} Bluechip Infotech. All rights
            reserved.
          </p>
          <p>Acer and the Acer logo are registered trademarks of Acer Inc.</p>
        </div>
      </div>
    </footer>
  );
}
