import svgPaths from "./svg-p7awq5iz23";
const imgSchoolLogo = new URL('../assets/lcu-logo.png', import.meta.url).href;
function Signal() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Signal">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Signal">
          <path d={svgPaths.p38428200} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Wifi() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Wifi">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Wifi">
          <path d={svgPaths.p8ede00} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute bottom-1/4 left-[8.33%] right-[8.33%] top-1/4" data-name="Group">
      <div className="absolute inset-[-11.11%_-6.67%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 11">
          <g id="Group">
            <path d={svgPaths.p2106a880} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p23fc7200} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}


function Battery() {
  return (
    <div className="overflow-clip relative shrink-0 size-[18px]" data-name="Battery">
      <Group />
    </div>
  );
}

function NotificationIcons() {
  return (
    <div className="content-stretch flex gap-[11px] items-center relative shrink-0" data-name="Notification Icons">
      <Signal />
      <Wifi />
      <Battery />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex items-start justify-between left-0 top-0 w-[326px]">
      <p className="font-['Poppins:ExtraBold',sans-serif] h-[17px] leading-[normal] not-italic relative shrink-0 text-[14px] text-black w-[38px]">9:40</p>
      <NotificationIcons />
    </div>
  );
}

function NotificationGroup() {
  return (
    <div className="absolute h-[18px] left-[25px] top-[16px] w-[325px]" data-name="Notification Group">
      <Frame />
    </div>
  );
}

function Frame1() {
  return <div className="absolute left-[calc(50%+44px)] size-[100px] top-[192px]" />;
}

export default function LogInSplash() {
  return (
    <div className="bg-black relative min-h-screen flex flex-col items-center justify-center overflow-hidden" 
    data-name="Log In splash 5">
      {/*<NotificationGroup /> */}
      <div className="flex flex-col items-center justify-center" data-name="School Logo">
        <img 
        alt="Lead City University Logo" 
        className="w-40 h-40 md:w-50 md:h-50 object-contain drop-shadow-xl" 
        src={imgSchoolLogo}
        />
      </div>
      <Frame1 />
    </div>
  );
}