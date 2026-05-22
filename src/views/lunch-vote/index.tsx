import React, { useState, useEffect } from 'react';

interface FoodCard {
    id: number;
    name: string;
    subtitle?: string;
    votes: number;
    progress: number;
    imageUrl: string;
    hasVoted: boolean;
    voterAvatars: string[];
    extraVoters: number;
}

const LunchVote: React.FC = () => {
    const [timeLeft, setTimeLeft] = useState({ minutes: 45, seconds: 0 });
    const [votedCardId, setVotedCardId] = useState<number | null>(1); // Mock: user đã vote cho card 1
    const [isSpinning, setIsSpinning] = useState(false);

    // Countdown timer
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev.minutes === 0 && prev.seconds === 0) return prev;
                if (prev.seconds === 0) {
                    return { minutes: prev.minutes - 1, seconds: 59 };
                }
                return { ...prev, seconds: prev.seconds - 1 };
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const formatTime = () => {
        const totalMinutes = 10 * 60 + 30; // 10:30 AM base
        const current = totalMinutes - (45 - timeLeft.minutes);
        const hours = Math.floor(current / 60);
        const mins = current % 60;
        return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}`;
    };

    const foodCards: FoodCard[] = [
        {
            id: 1,
            name: 'Bún Đậu Mắm Tôm',
            votes: 12,
            progress: 75,
            imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuChFhqEjtS5hLEUnmmbvhc0dajsSyoLJZkHJuliQr2rCsUT317snIcTUBx2hXq6hVkpdycTUAPHE9qph189B12Ns7Xrzp6NiHbrYZMTJZxOjlgUyQb2dqg2tAt3UDWLhcN_jLUTq4YezIKhTZ33KQpPa27fA3MbYethNOj-hZTdM0Vg-fPBbXekYIdFTm_ic5NgL_iiKZEFCbYLMPFrRSfQ-0bswgR8jVKbYueTxZ176hO4s0UOXHiPapEFl5-QPlzv9-dxH4p7URs',
            hasVoted: true,
            voterAvatars: [
                'https://lh3.googleusercontent.com/aida-public/AB6AXuBRcHiE_dI5hbro0FHmQGcjszXmsByIhIE3lmDHgQiiK7UUK9FOKjXU5xj84fllKnv6sBH4f3uMzL3bSjyPvWl0Yn-NIeGnqkDbuQTuhJx4pugUCJOsqjg1fwl41G8oSEwMv8pHHMpEaV2Fuchq29X5rTy423k2Kgl4C34BhzW_zCvkGS-4tsIkHZx0zmJMHvm8LYPbp-Npggyyua2IufpVqFGD5w4Wm2OcoYV31ykSvoQv7vD6zqt7k5BPLhEux1Ps_Jesu6ZLWTU',
                'https://lh3.googleusercontent.com/aida-public/AB6AXuDKyybiACCFuruZ3xdak_KZmIFlQ65cn4ar_hR0u0TSVYASuFbhQS8I5ryF6587ydpjvzqM7zwlTJ7aez0KiPm1Mwvf54v4xb2UoVptDvZ7uGyHztunnLpPIFdPkSFhkRuwDZyqDFtcTYvTj6vxIZ6tWx1EsI314M7hikunXdL2PlL03Givch1TKvuv_Fne05OpP28tlv2QuGGtBuFIMaO_iRumlvIrEZ7PKwXuNTKLC9dfE55__YtmnTbeNbrSNzTkJJDT-Ek1ifE',
                'https://lh3.googleusercontent.com/aida-public/AB6AXuDP3ne4BDQ-9QCbY642gQqvLhhdL1yIBaH76MNzQudyEzzhhENf_tXqVbLZB0sgg4oXH3OcC3oBUrWhQ8qvwndvT9QRDqZT0_hygT2vNcvwrRAbITlAyzjsGQVRebmJCelx3OYOrVEDUGH6yhSgEGmVP-v_xoDqRJe6rZTeDMjM_r-rO5z0VWBRVsOH8Grez0XRayDFxn2OCAmOWdvEbHbMFceN2L_16S6C7_sk3B-lgQhpgriXtaW9_KDo04QEb8-tV4w8ra0T_9k'
            ],
            extraVoters: 9
        },
        {
            id: 2,
            name: 'Cơm Gà Hải Nam',
            subtitle: 'Đang chờ ý kiến của bạn...',
            votes: 8,
            progress: 50,
            imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCv2zJQtOPsvfUhLxpmtmtekWr4-l-C9eujWPKlcUu2gLXmd8rzap0EySBR_cqTBIDS7eeSzY2_TbkOygbmmefre1LvMncRPyT4r0w-_3AiXKmByNXiAjl0gg7AV2lEMWu_FQ-XbSagChOi4H0HkSjh7gWjQvzJS_0eXDc0aUwoYC1INzQ95uEBpR1kv8xOAsSDP269XCi65gqqM_2HxuoW-sBV0MFRe0TeNvuZoMBPeTBaXHSqOMdRxlC_py2DhcI9Wl862IJlCF4',
            hasVoted: false,
            voterAvatars: [
                'https://lh3.googleusercontent.com/aida-public/AB6AXuCG4G4I69s2t-t-WJQpff0yEVjaSXTg1ujOk4VBGbclFE62CmvW9iZGGDpQymY_HYTbfpE0c3XHDfPaPuAKcdtMGSqIk4bjhON5KTYdM3x2DIoM-og7P2X_hnC7IYXlJYguHwViLjimKrSP-YSCADEZeIdSpkf0Bab2_LwTi5zY7iTeOSDly2ck5qQB8_58iyXC5mDVp-ykwNQMX2Omxedk4QWWhzoIrZLcL2rOSoUeDuIl42gYZOYnK1ZEQlR-y7ywBkmM6bd7MTiQ',
                'https://lh3.googleusercontent.com/aida-public/AB6AXuDKyybiACCFuruZ3xdak_KZmIFlQ65cn4ar_hR0u0TSVYASuFbhQS8I5ryF6587ydpjvzqM7zwlTJ7aez0KiPm1Mwvf54v4xb2UoVptDvZ7uGyHztunnLpPIFdPkSFhkRuwDZyqDFtcTYvTj6vxIZ6tWx1EsI314M7hikunXdL2PlL03Givch1TKvuv_Fne05OpP28tlv2QuGGtBuFIMaO_iRumlvIrEZ7PKwXuNTKLC9dfE55__YtmnTbeNbrSNzTkJJDT-Ek1ifE'
            ],
            extraVoters: 6
        },
        {
            id: 3,
            name: 'Phở Bò',
            votes: 5,
            progress: 30,
            imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBFPz85JkNUbdQEipfM6mhqaywPLpW-5L-xjG6K09j_4cYC87wKypOWcA2tjyHoEYIAvFpUYkns9dUTThRnD5xt570PnAR1qMRMFAIu2aHn-E7ZYwia-PHnKUSKm4dulMUuxup537LXycHP0M4TjrJYHGurh3pilnGFrEAtpcz6_CN0_SJlP_HWX15O1VNTx8kz-ME_4i2RfnrC5Wg3pcQsKW1Tzn_zhy_9qBQyBs7Qn0OT1CP56NBwWrrh_cwWFlE4MWurbqnncaA',
            hasVoted: false,
            voterAvatars: [
                'https://lh3.googleusercontent.com/aida-public/AB6AXuCG4G4I69s2t-t-WJQpff0yEVjaSXTg1ujOk4VBGbclFE62CmvW9iZGGDpQymY_HYTbfpE0c3XHDfPaPuAKcdtMGSqIk4bjhON5KTYdM3x2DIoM-og7P2X_hnC7IYXlJYguHwViLjimKrSP-YSCADEZeIdSpkf0Bab2_LwTi5zY7iTeOSDly2ck5qQB8_58iyXC5mDVp-ykwNQMX2Omxedk4QWWhzoIrZLcL2rOSoUeDuIl42gYZOYnK1ZEQlR-y7ywBkmM6bd7MTiQ'
            ],
            extraVoters: 4
        }
    ];

    const handleVote = (cardId: number) => {
        if (!votedCardId) {
            setVotedCardId(cardId);
            alert('✨ Bạn đã vote thành công!');
        }
    };

    const spinWheel = () => {
        setIsSpinning(true);
        setTimeout(() => {
            setIsSpinning(false);
            alert("✨ Đang tìm món ngon cho bạn... Thử Bún Chả nhé! ✨");
        }, 600);
    };

    return (
        <div className="min-h-screen pb-32 bg-background text-on-surface font-body-md text-body-md">
            <style dangerouslySetInnerHTML={{
                __html: `
                .material-symbols-outlined {
                    font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
                }
                .glass-card {
                    background: rgba(255, 255, 255, 0.8);
                    backdrop-filter: blur(12px);
                    -webkit-backdrop-filter: blur(12px);
                }
                .bouncy-tap:active {
                    transform: scale(0.92);
                }
                @keyframes pulse-soft {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.7; }
                }
                .animate-pulse-soft {
                    animation: pulse-soft 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                }
            `}} />
            <main className="pt-sm space-y-md">
                {/* Header Section */}
                <div className="space-y-sm">
                    <div className="flex justify-between items-end">
                        <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">
                            Hôm nay ăn gì? 🍲
                        </h1>
                        <div className="bg-error-container text-on-error-container px-1 py-1 rounded-full flex items-center gap-1 animate-pulse-soft">
                            <span className="material-symbols-outlined text-[18px]" data-icon="schedule">schedule</span>
                            <span className="font-label-md text-label-md">
                                {formatTime()} ({timeLeft.minutes}m{timeLeft.seconds.toString().padStart(2, '0')}s)
                            </span>
                        </div>
                    </div>

                    {/* AI Suggestion Bubble */}
                    <div className="relative inline-flex items-center gap-2 bg-secondary-container text-on-secondary-container w-full px-4 py-3 rounded-2xl rounded-tl-none shadow-sm border border-secondary/10">
                        <span className="material-symbols-outlined text-secondary" data-icon="lightbulb" style={{ fontVariationSettings: "'FILL' 1" }}>lightbulb</span>
                        <p className="font-label-md text-label-md leading-tight">
                            Trời nóng 35°C → <span className="font-bold">Bún chả</span> là chân ái! 🔥
                        </p>
                    </div>
                </div>

                {/* Food List */}
                <section className="space-y-6">
                    {foodCards.map(card => {
                        const isVoted = card.hasVoted || votedCardId === card.id;
                        return (
                            <div key={card.id} className="group relative bg-surface-container-lowest rounded-lg shadow-[0_8px_30px_rgb(144,77,0,0.08)] overflow-hidden transition-all duration-300 hover:shadow-[0_20px_40px_rgb(144,77,0,0.12)]">
                                {/* Image */}
                                <div className="h-48 w-full relative">
                                    <img
                                        className={`w-full h-full object-cover ${!isVoted ? 'opacity-90 group-hover:opacity-100 transition-opacity' : ''}`}
                                        alt={card.name}
                                        src={card.imageUrl}
                                    />
                                    {/* Vote count badge */}
                                    <div className={`absolute top-4 right-4 ${isVoted ? 'bg-primary text-on-primary shadow-lg' : 'bg-surface/90 text-on-surface shadow-md'} px-3 py-1 rounded-full font-label-md text-label-md flex items-center gap-1`}>
                                        <span className="material-symbols-outlined text-[16px]" data-icon="thumb_up" style={{ fontVariationSettings: isVoted ? "'FILL' 1" : "'FILL' 0" }}>thumb_up</span>
                                        {card.votes} Votes
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-md space-y-sm">
                                    <div className="flex justify-between items-start px-margin-mobile py-2">
                                        <div>
                                            <h3 className="font-headline-md text-headline-md">{card.name}</h3>
                                            {isVoted ? (
                                                <div className="flex -space-x-2 mt-2">
                                                    {card.voterAvatars.map((avatar, idx) => (
                                                        <img
                                                            key={idx}
                                                            alt="voter"
                                                            className="w-8 h-8 rounded-full border-2 border-surface-container-lowest"
                                                            src={avatar}
                                                        />
                                                    ))}
                                                    {card.extraVoters > 0 && (
                                                        <div className="w-8 h-8 rounded-full bg-surface-container-high border-2 border-surface-container-lowest flex items-center justify-center text-[10px] font-bold">
                                                            +{card.extraVoters}
                                                        </div>
                                                    )}
                                                </div>
                                            ) : (
                                                card.subtitle && (
                                                    <p className="text-on-surface-variant font-label-md text-label-md mt-1">
                                                        {card.subtitle}
                                                    </p>
                                                )
                                            )}
                                        </div>
                                        <button
                                            className={isVoted
                                                ? "bouncy-tap bg-primary text-on-primary font-label-md text-label-md px-6 py-2.5 rounded-xl shadow-md hover:scale-105 transition-all active:scale-90 flex items-center gap-2"
                                                : "bouncy-tap border-2 border-primary text-primary font-label-md text-label-md px-6 py-2 rounded-xl hover:bg-primary/5 transition-all active:scale-90"}
                                            onClick={() => handleVote(card.id)}
                                            disabled={!!votedCardId && votedCardId !== card.id}
                                        >
                                            {isVoted ? 'VOTED' : 'VOTE'}
                                        </button>
                                    </div>

                                    {/* Progress bar */}
                                    <div className="w-full h-3 bg-surface-container-high rounded-full overflow-hidden">
                                        <div
                                            className={`h-full bg-gradient-to-r from-secondary-container to-primary-container rounded-full ${isVoted ? 'shadow-[2px_0_8px_rgba(255,140,0,0.4)]' : ''}`}
                                            style={{ width: `${card.progress}%` }}
                                        />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </section>
            </main>

            {/* Floating Wheel Action */}
            <div className="fixed bottom-28 right-6 z-40">
                <button
                    className={`bouncy-tap bg-tertiary-container text-on-tertiary w-16 h-16 rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition-transform relative group ${isSpinning ? 'rotate-[360deg]' : ''}`}
                    onClick={spinWheel}
                >
                    <span className="material-symbols-outlined text-[32px]" data-icon="casino">casino</span>
                    {/* Tooltip */}
                    <span className="absolute right-20 bg-inverse-surface text-inverse-on-surface px-3 py-1.5 rounded-lg text-label-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                        Random món nè! 🎡
                    </span>
                </button>
            </div>
        </div>
    );
};

export default LunchVote;