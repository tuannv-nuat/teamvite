import React from 'react';

interface Member {
  id: string;
  avatarUrl: string;
}

interface OnlineMembersProps {
  members?: Member[];
  onlineCount?: number;
}

const OnlineMembers: React.FC<OnlineMembersProps> = ({
  members = [
    {
      id: '1',
      avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA7iWV8yGxVi8FTZNqUrBQ1Yesy_iwPMD6Alb9bH0FvmElwYH78eiDTZZJincw50VxpT2wZah0zwceRhdfysmZ6OBm6Ld_WMz_DIq_hY_UFjSjP_0uOfDft1251aSFVt8AHOWifSmir60Sb2dHNDOgvZO61B3C4kdEJuUmNjVnziDQ0KPMM5tWNPUpn-XZkmGHPFMJz1rbqd4hyl4aFnCFVj5Y2wgsGJjcXXOsk5x4YkZ24t-7z2WjIX-sK4yPvAm6wIf28ULYhwTk',
    },
    {
      id: '2',
      avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDLWqotn69sizzDCFjjYzwNrsr2qIYBfhLPdrhxem7Y4r2Pck0ExEHW0OZ0DjnOEQchQ9VW-U2ns402SGzA1-dDPvaEHz1m1EQCG6L5u6q2gjIEoJqKXIu5x7_DP7YulcBsqPkO-EehrDfswDFJNnABPz4WM6wDdP80I7zU4jcbZOCP7YGvyIuFQujESjO3cTzTnDg_X54f3krq_7EoVV-mqTnFHjlsUb3sedKw1URD0C4b5Pn3vsMic1MXyHrs89c0kiclsGsJ7vU',
    },
    {
      id: '3',
      avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDGt6U4h8HxveoII3vrLQgp6Tkp5qzzG8J9JudMP6sDe7pz8ZeUVten4_aUz4GF1WkcU-D1HLkt8TS6L1b2OMvtSEhY_uGG3LIjPXB4pgxwonodBMVOv_Y64yyviHp0-MysISF1Ry_fFeeCVT4UAgq0-hwTQLfyBXPtwbrhawiS2oQvUs5ELa6U2VgoBDejXLaKx-7V-wptT25eXq6NLIlt2zpU5EJX-mRetFj3blb1_0-F6Y6E55tHMUrJWt6q5Qs74ZikyhD-DMk',
    },
    {
      id: '4',
      avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBe0WvBCAOUOj9FE-bXjAYPrYCpsBadAbnUFx0suIgNZvvRlMnQU6VwNQdAJUum5Cidnc0eqxXnXaM2xJ86f-q5drJa39P48srWZ6iFoVzde42N3xJTW3OFaOFn23XkFk5nfBrbHK9aETRUZIQeNbJIcgdtcKwdN_KzL1_zY0QzcxB_boenL9EZcTgVb0iH96b-sBixSbwA-zB86KHAda2ya-VxpBHtO5DBALon-Nt_veOnb3Hyz55GDj8Ijdn-z6JWYQZd0OJc4TI',
    },
    {
      id: '5',
      avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCGKdtia1qcrMX7bPhhdSnfSIvMd17ckY7CqAb_S2pMGGM71pkfx2S_WOP34Uevdml-YLu6gERHZGuzQImGwJROce3fMnbAIe6_kNkLqNkBkPf7WZtA5k4NhT2usnv1Usgcj28Rt4ul9QNES7mlmdoMgMAiu9NcDFsfL2zgPcGF5NYQRnPbd8kVV5LE-9pNf7nCGdPt1XXrXD2TgUgm7vS32iDRreSAojsuYrfjMbfyyAXyoPWGPLhdLR2tWxVHq8HTpeCHOdp8om4',
    },
  ],
  onlineCount = 5,
}) => {
  return (
    <section>
      <div className="flex items-center gap-2 overflow-x-auto pb-2 hide-scrollbar">
        {members.map((member) => (
          <div key={member.id} className="relative flex-shrink-0">
            <div className="w-14 h-14 rounded-full border-2 border-white shadow-sm overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={member.avatarUrl}
                alt="Team member"
              />
            </div>
            <div className="absolute bottom-0 right-0 w-4 h-4 bg-tertiary rounded-full border-2 border-white pulse-green"></div>
          </div>
        ))}
        <div className="w-14 h-14 rounded-full bg-primary-fixed flex items-center justify-center text-on-primary-fixed font-bold text-label-md flex-shrink-0 border-2 border-white shadow-sm">
          +{onlineCount - members.length}
        </div>
      </div>
    </section>
  );
};

export default OnlineMembers;
