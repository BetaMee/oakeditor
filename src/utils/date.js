import moment from 'moment'

/**
 * 根据Moment时间来对数据进行降序排序，prevMoment >= nextMoment
 * @param {*} prevMoment 
 * @param {*} nextMoment 
 */
const sortDataByMomentDes = (prevMoment, nextMoment) => {
  return moment(prevMoment).isSameOrBefore(moment(nextMoment))
} 

/**
 * 根据Moment时间来对数据进行升序排序，prevMoment<= nextMoment
 * @param {*} prevMoment 
 * @param {*} nextMoment 
 */
const sortDataByMomentAsc = (prevMoment, nextMoment) => {
  return moment(prevMoment).isSameOrAfter(moment(nextMoment))
} 

export default {
  sortDataByMomentAsc,
  sortDataByMomentDes
}
