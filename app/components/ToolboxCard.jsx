import Image from "next/image";

const ToolboxCard = ({ image, name, category }) => {
  return (
    <div
      className="flex flex-col justify-center lg:flex-row lg:justify-start items-center gap-10 
    px-16 py-6 pb-10 border-b-1 border-cneutral-200 opacity-70 hover:opacity-100"
    >
      <Image
        src={image}
        alt={`${name} tool`}
        width={`auto`}
        height={`auto`}
        className="w-[120] h-[120]"
      />
      <div className="flex flex-col justify-between items-center lg:items-start space-y-4">
        <h4 className="font-kanit font-bold text-heading4">{name}</h4>
        <p className="font-kumbhsans font-medium text-body-18">
          {category} tool
        </p>
      </div>
    </div>
  );
};

export default ToolboxCard;
