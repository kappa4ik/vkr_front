import { FC, useState } from 'react'
import MainCatalog from '@/ui/buttons/Catalog/MainCatalog'
import TextSpan from '@/ui/spans/Catalog/TextSpan'
import ButtonSpan from '@/ui/spans/Catalog/ButtonSpan'
import ButtonSvg from '@/ui/svgs/Catalog/ButtonSvg'
import GlobalCategoriesScroll from '@/ui/scrollbars/Catalog/GlobalCategoriesScroll';
import GlobalCategories from '@/component/Catalog/components/GlobalCategories';
import MiddleCategory from '@/component/Catalog/components/MiddleCategory';
import CatalogDropMenu from '@/layout/Catalog/CatalogDropMenu';

const Catalog: FC = () => {
	const [close, setClose] = useState<boolean>(true)
	const openingMenuCatalog = () => {
		setClose(!close)
	}

	return (
		<>
			<MainCatalog openingMenuCatalog={openingMenuCatalog}>
				<ButtonSpan>
					<ButtonSvg close={close} />
					<TextSpan close={close} />
				</ButtonSpan>
			</MainCatalog>
      <CatalogDropMenu close={close}>
        <GlobalCategoriesScroll>
          <GlobalCategories />
        </GlobalCategoriesScroll>
        <MiddleCategory />
      </CatalogDropMenu>
		</>
	)
}

export default Catalog
