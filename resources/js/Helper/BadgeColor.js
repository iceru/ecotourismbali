import { toLower } from "lodash";

export const badgeColor = (badge, type) => {
    const badgeLower = toLower(badge);
    let color;
    let text;
    let plain;
    let data;
    switch (badgeLower) {
        case 'bronze':
            color = 'bg-yellow-700';
            text = 'text-yellow-700';
            plain = 'yellow-700';
            break;
        case 'silver':
            color = 'bg-slate-500';
            text = 'text-slate-500';
            plain = 'slate-500';
            break;
        case 'gold':
            text = 'text-yellow-500';
            color = 'bg-yellow-500';
            plain = 'yellow-500';
            break;
        default:
            color = 'bg-yellow-700';
            text = 'text-yellow-700';
            plain = 'yellow-700';
            break;
    }

    if (type === 'text') {
        data = text;
    } else if (type === 'color') {
        data = color;
    } else {
        data = plain;
    }

    return data;
};