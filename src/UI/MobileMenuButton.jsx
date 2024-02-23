export default function MobileMenuButton(props) {
  return (
    <div
      className="flex justify-end pr-3"
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
          className={`${props.mobileMenuAnimation && "translate-y-[2px] rotate-45"} h-[2px] w-8 rounded-lg bg-white transition-all duration-500`}
        />
        <div
          className={`${props.mobileMenuAnimation ? "my-0 opacity-0" : "my-[8px]"} h-[2px] w-8 rounded-lg bg-white transition-all duration-500`}
        />
        <div
          className={`${props.mobileMenuAnimation && "-translate-y-[2px] -rotate-45"} h-[2px] w-8 rounded-lg bg-white transition-all duration-500`}
        />
      </div>
    </div>
  );
}
