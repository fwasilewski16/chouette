export default function MobileMenuButton(props) {
  return (
    <button
      type="button"
      className="flex justify-end rounded-b-xl bg-[#f9ab48] px-3 xl:hidden"
      aria-label={
        props.mobileMenuVisible
          ? "Fermer le menu de navigation"
          : "Ouvrir le menu de navigation"
      }
      aria-controls="mobile-navigation"
      aria-expanded={props.mobileMenuVisible}
      onClick={() => {
        if (!props.mobileMenuVisible) {
          props.setMobileMenuVisible(true);
          setTimeout(() => {
            props.setMobileMenuAnimation(true);
          }, 100);
        }
        if (props.mobileMenuVisible) {
          props.setMobileMenuAnimation(false);
          setTimeout(() => {
            props.setMobileMenuVisible(false);
          }, 500);
        }
      }}
    >
      <div className="flex h-full flex-col justify-center">
        <div
          className={`${props.mobileMenuAnimation && "translate-y-[2px] rotate-45"} h-[2px] w-9 rounded-lg bg-white transition-all duration-500`}
        />
        <div
          className={`${props.mobileMenuAnimation ? "my-0 opacity-0" : "my-[8px]"} h-[2px] w-9 rounded-lg bg-white transition-all duration-500`}
        />
        <div
          className={`${props.mobileMenuAnimation && "-translate-y-[2px] -rotate-45"} h-[2px] w-9 rounded-lg bg-white transition-all duration-500`}
        />
      </div>
    </button>
  );
}
