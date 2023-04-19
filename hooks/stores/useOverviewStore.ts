import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { clinicInfoModel } from "../../types/clinicInfo";

interface OverviewState {
  selectedClinic: clinicInfoModel | undefined;
  setSelectedClinic: (newClinic: clinicInfoModel | undefined) => void;
}

const useOverviewStore = create<OverviewState>()(
  devtools(
    persist(
      (set) => ({
        selectedClinic: undefined,
        setSelectedClinic: (newClinic: clinicInfoModel | undefined) =>
          set((_: any) => ({ selectedClinic: newClinic })),
      }),
      {
        name: "overview-storage",
      },
    ),
  ),
);

export { useOverviewStore };
