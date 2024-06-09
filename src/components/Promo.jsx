
import leuldev from '../assets/leultdev.jpg';
import qr from '../assets/leultdev_qr.png'

const Promo = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Promo</h1>
      <div className="banner flex flex-col sm:flex-row bg-[#9A9ECE] rounded-3xl p-6 items-center gap-12">
        <img src={leuldev} alt="Leul Dev" className="mx-4 my-4 h-56 w-auto rounded-xl shadow-lg" />
        <div className="text ml-6">
          <p className="text-xl font-semibold text-black">scan for full info here</p>
        </div>
        <div className="qr">
            <img src={qr} className='h-32' />
        </div>
      </div>
    </div>
  );
};

export default Promo;
