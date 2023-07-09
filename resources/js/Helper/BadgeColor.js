import { toLower } from "lodash";

const badgeColor = (badge, type) => {
    const badgeLower = toLower(badge);
    let color;
    let text;
    switch (badgeLower) {
        case 'bronze':
            color = '!bg-yellow-700';
            text = '!text-yellow-700';
            break;
        case 'silver':
            color = '!bg-slate-500';
            text = '!text-slate-500';
            break;
        case 'gold':
            text = '!text-yellow-500';
            color = '!bg-yellow-500';
            break;
        default:
            color = 'bg-yellow-700';
            text = 'text-yellow-700';
            break;
    }

    return type === 'text' ? text : color;
};

export { badgeColor };