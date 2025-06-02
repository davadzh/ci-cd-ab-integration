import { FoodGroupType } from "@entities/food-group";
import {
  FoodGroupBarWidgetStyled
} from "@widgets/food-group-bar-widget/styled-components/food-group-bar-widget.styled.ts";
import { FoodGroupBarItemStyled } from "@widgets/food-group-bar-widget/styled-components/food-group-bar-item.styled.ts";
import { RefObject, useState } from "react";
import {
  FoodGroupBarShadowStyled
} from "@widgets/food-group-bar-widget/styled-components/food-group-bar-shadow.styled.ts";

interface FoodGroupBarWidget {
  foodGroups: FoodGroupType[]
  groupRefs: RefObject<Record<string, HTMLDivElement | null>>
}

export const FoodGroupBarWidget = (props: FoodGroupBarWidget) => {
  const { foodGroups, groupRefs } = props;

  const [activeGroupId, setActiveGroupId] = useState<string>(foodGroups[0]?.id);
  // const observerRef = useRef<IntersectionObserver | null>(null);

  const onClick = (id: string) => {
    const el = groupRefs.current[id];
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveGroupId(id)
    }
  }
  //
  // useEffect(() => {
  //   const sections = Object.values(groupRefs.current || {}).filter(Boolean) as HTMLDivElement[];
  //   if (sections.length === 0) return;
  //
  //   if (observerRef.current) {
  //     observerRef.current.disconnect();
  //   }
  //
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       let minTop = Number.POSITIVE_INFINITY;
  //       let currentId = activeGroupId;
  //
  //       entries.forEach(entry => {
  //         const id = entry.target.getAttribute('data-id');
  //         if (!id) return;
  //
  //         if (entry.isIntersecting && entry.boundingClientRect.top < minTop) {
  //           minTop = entry.boundingClientRect.top;
  //           currentId = id;
  //         }
  //       });
  //
  //       if (currentId !== activeGroupId) {
  //         setActiveGroupId(currentId);
  //       }
  //     },
  //     {
  //       root: null,                // следим за скроллом окна
  //       rootMargin: "0px 0px -70% 0px", // триггерим активность раньше
  //       threshold: 0,
  //     }
  //   );
  //
  //   sections.forEach((el) => observer.observe(el));
  //   observerRef.current = observer;
  //
  //   return () => {
  //     observer.disconnect();
  //   };
  // }, [groupRefs, foodGroups, activeGroupId]);

  return (
    <FoodGroupBarWidgetStyled>
      <FoodGroupBarShadowStyled />

      {foodGroups.map((foodGroup) => (
        <FoodGroupBarItemStyled
          _isActive={foodGroup.id === activeGroupId}
          onClick={() => onClick(foodGroup.id)}
          key={foodGroup.id}
        >
          {foodGroup.name}
        </FoodGroupBarItemStyled>
      ))}
    </FoodGroupBarWidgetStyled>
  );
};
