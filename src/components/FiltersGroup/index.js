import './index.css'

import {BsSearch} from 'react-icons/bs'

const FiltersGroup = props => {
  const displayRatingsFilterList=()=>{
    const {ratingsList}=props
    return ratingsList.map(rating=>{
      const {changeRating,activeRatingId}=props
      const onClickRatingItem=()=>changeRating(rating.ratingId)
      const ratingClassName=activeRatingId===rating.ratingId ? `active-rating rating-name`: `rating-name`
      return(
        <li className="rating-list-item" key={rating.ratingId} onClick={onClickRatingItem}>
        <img src={rating.imageUrl} alt={`rating ${rating.ratingId}`} className="rating-image"/>
        <p className={ratingClassName}>& up</p>
        </li>
      )
      
    })
  }
  const displayRatingFilters=()=>(
    <div>
    <h1 className="rating-heading">Rating</h1>
    <ul className="ratings-list">{displayRatingsFilterList()}</ul>
    </div>
  )

  const displayCategoriesList=()=>{
    const {categoryOptions}=props
    return categoryOptions.map(category=>{
      const {changeCategory,activeCategoryId}=props
      const onClickCategoryItem=()=>changeCategory(category.categoryId)
      const isActive=category.categoryId===activeCategoryId
      const categoryClassName=isActive ? `category active-category` : `category`
      return(
        <li className="category-list-items" key={category.categoryId} onClick={onClickCategoryItem}>
        <p className={categoryClassName}>{category.name}</p>
        </li>
      )
    })
  }

  const displayCategories=()=>(
    <>
    <h1 className="category-heading">Category</h1>
    <ul className="categories-list">{displayCategoriesList()}</ul>
    </>
  )

  const onEnterSearchInput=event=>{
    const {enterSearchInput}=props
    if(event.key==='Enter'){
      enterSearchInput()
    }
  }

  const onChangeSearchInput=event=>{
    const {changeSearchInput}=props
    changeSearchInput(event.target.value)
  }

  const displaySearchInput=()=>{
    const {searchInput}=props
    return(
      <div className="search-input-container">
      <input value={searchInput} type="search" className="search-input-text" placeholder="Search" onChange={onChangeSearchInput} onKeyDown={onEnterSearchInput}/>
      <BsSearch className="search-icon"/>
      </div>
    )
  }

  const {clearFilters}=props
  return(
    <div className="filters-group-container">
    {displaySearchInput()}
    {displayCategories()}
    {displayRatingFilters()}
    <button type="button" className="clear-filter-btn" onClick={clearFilters}>
    Clear Filters
    </button>
    </div>
  )
}

export default FiltersGroup
