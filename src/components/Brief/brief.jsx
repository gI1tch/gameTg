import { useState } from 'react'
import './brief.css'
import { Slider } from '@mui/material'
import {Box} from '@mui/material'
import {FormGroup} from '@mui/material'
import {FormControlLabel} from '@mui/material'
import {RadioGroup} from '@mui/material'
import {Radio} from '@mui/material'
const Brief  = () => {
   
    const [price, setPrice] = useState([34, 51]);
    const [time, setTime] = useState([34, 51]);

    const handlePrice = ( event,newValue) => {
      setPrice(newValue);
    };

    const handleTime = ( event,newValue) => {
        setTime(newValue);
      };

    return (
        <div className="brief ">
            <div className="container">
                <div className="brief__text-block">
                    <h2>
                        Онлайн-заявка
                    </h2>
                    <p>
                        Оставьте ваши контактные данные и наш менеджер свяжется с вами
                    </p>
                </div>

                <form action="#" className = 'brief__form'>
                    <div className="brief__form-range">
                        <p> [#] Ценовой диапозон</p>
                        <Box >
                            <Slider
                                getAriaLabel={() => 'Price'}
                                value={price}
                                onChange={handlePrice}
                                valueLabelDisplay="auto"
                                
                                min={50000}
                                max={5000000}
                                step={10000}
                            />
                        </Box>

                        <div className="brief__form-range-positions">
                            <span class = 'first-pos'>50 000 руб.</span>
                            <span class = 'sec-pos'>5 000 000 руб.</span>
                        </div>
                    </div>

                    <div className="brief__form-range" style = {{marginTop: 27}}>
                        <p> [#] Временной диапазон</p>
                        <Box >
                            <Slider
                                getAriaLabel={() => 'Price'}
                                value={time}
                                onChange={handleTime}
                                valueLabelDisplay="auto"
                                
                                min={3}
                                max={365}
                                step={1}
                            />
                        </Box>

                        <div className="brief__form-range-positions">
                            <span class = 'first-pos'>3 дня</span>
                            <span class = 'sec-pos'>1 год</span>
                        </div>
                    </div>


                    <div className="brief-naming">
                        <div className="brief__naming-block">
                            [#]   Egor
                        </div>
                        <div className="brief__naming-block">
                            [#]   @EgorIgnakhin
                        </div>
                        <div className="brief__naming-block">
                            [#]   egor.ignakhin@gmail..
                        </div>
                    </div>
                   
                   <div className="brief__test">
                        <div className="brief__test-quest">
                            <p>Какую задачу должна решать игра?</p>
                            
                        </div>
                        <FormGroup className='brief__test-answs'>
                            <RadioGroup
                                aria-labelledby="company-goal"
                                name="radio-buttons-group">
                                    
                                <FormControlLabel 
                                    value='Привлечение новой аудитории' 
                                    control={<Radio />} 
                                    label="Привлечение новой аудитории"  
                                    className='brief__test-answ'/>
                                <FormControlLabel 
                                    value='Получение прибыли' 
                                    control={<Radio />} 
                                    label="Получение прибыли"
                                    className='brief__test-answ' 
                                    aria-label='12'/>
                                <FormControlLabel 
                                    value='Реализация идей, амбиций, культурных ценностей'
                                    control={<Radio />}
                                    label="Реализация идей, амбиций, культурных ценностей"
                                    className='brief__test-answ'/>
                                <FormControlLabel 
                                    value='Инновации, образование'
                                    control={<Radio />}
                                    label="Инновации, образование"
                                    className='brief__test-answ'/>
                                <FormControlLabel 
                                    value='Другое...'
                                    control={<Radio />}
                                    label="Другое... "
                                    className='brief__test-answ'/>
                            </RadioGroup>
                        </FormGroup>
                      

                        
                   </div>

                   <div className="brief__long-quest">
                        <p>
                            <b>Краткое описание проекта  </b> — расскажите, что за игра, жанр, категория, как пользователи будут взаимодействовать с миром игры, прогресс или соревнование
                        </p>

                        <textarea>

                        </textarea>
                   </div>
                   <div className="brief__long-quest">
                        <p>
                         <b>Целевая аудитория игры </b>  — расскажите, кто основной пользователь игры. Опишите его социально-демографические характеристики (пол, возраст, доход, образование, стиль жизни)
                        </p>

                        <textarea>

                        </textarea>
                   </div>

                   <div className="brief__test">
                        <div className="brief__test-quest">
                            <p><b>Какую нужно использовать графику</b>  — от этого будет зависеть состав команды художников</p>
                        
                        </div>
                        <FormGroup className='brief__test-answs'>
                            <RadioGroup>
                                <FormControlLabel 
                                    value='2D'
                                    control={<Radio />} 
                                    label="2D"  
                                    className='brief__test-answ'/>
                                <FormControlLabel 
                                    value='3D'
                                    control={<Radio />} 
                                    label="3D"
                                    className='brief__test-answ' />
                                <FormControlLabel 
                                    value='2.5D'
                                    control={<Radio />} 
                                    label="Изометрия (2.5D)" 
                                    className='brief__test-answ'/>
                        
                            </RadioGroup>
                            
                        </FormGroup>  
                   </div>

                   <div className="brief__test">
                        <div className="brief__test-quest">
                            <p><b>Какую нужно использовать стилистику</b> — от этого будет зависеть состав команды художников</p>
                        
                        </div>
                        <FormGroup className='brief__test-answs'>
                            <RadioGroup>
                                <FormControlLabel
                                    value='Мультяшный стиль'
                                    control={<Radio />}
                                    label="Мультяшный стиль" 
                                    className='brief__test-answ'/>
                                <FormControlLabel 
                                    value='Пиксель-арт'
                                    control={<Radio />} 
                                    label="Пиксель-арт" 
                                    className='brief__test-answ' />
                                <FormControlLabel 
                                    value='Реализм'
                                    control={<Radio />} 
                                    label="Реализм"
                                    className='brief__test-answ'/>
                                <FormControlLabel 
                                    value='Другое'
                                    control={<Radio />}
                                    label="Другое"
                                    className='brief__test-answ'/>
                            </RadioGroup>
                        </FormGroup>  
                   </div>

                   <div className="brief__test">
                        <div className="brief__test-quest">
                            <p>
                            <b>Планируется ли онлайн-составляющая </b> —  это может сильно повлиять на стоимость и сроки, а также на состав команды программистов
                            </p>
                        
                        </div>
                        <FormGroup className='brief__test-answs'>
                            <RadioGroup>
                                <FormControlLabel
                                    value='Требуется сервер'
                                    control={<Radio />}
                                    label="Требуется сервер (лидерборды, авторизация, личный кабинет, логирование, админ-панель)" 
                                    className='brief__test-answ'/>
                                <FormControlLabel
                                    value='коллективное взаимодействие'
                                    control={<Radio />}
                                    label="Игра предполагает коллективное взаимодействие" 
                                    className='brief__test-answ'/>
                                
                            </RadioGroup>
                        </FormGroup>  
                   </div>
                   <div className="brief__test">
                        <div className="brief__test-quest">
                            <p>
                            <b>Нужна ли разработка дополнительных сервисов  </b> — например, авторизация, аналитика, реклама, прием платежей, облачные сервисы
                            </p>
                        </div>
                        <FormGroup className='brief__test-answs'>
                            <RadioGroup>
                                <FormControlLabel
                                    value='Требуются сервисы'
                                    control={<Radio />}
                                    label="Да" 
                                    className='brief__test-answ'/>
                                
                                
                            </RadioGroup>
                        </FormGroup>  
                   </div>
                   <div className="brief__test">
                        <div className="brief__test-quest">
                            <p>
                            <b>Есть ли готовые наработки </b> — например, сценарий, тех. задание, референсы графики, механики и т.д
                            </p>
                        </div>
                        <FormGroup className='brief__test-answs'>
                            <RadioGroup>
                                <FormControlLabel
                                    value='Присутствуют наработки'
                                    control={<Radio />}
                                    label="Да" 
                                    className='brief__test-answ'/>
                                
                                
                            </RadioGroup>
                        </FormGroup>  
                   </div>

                   <div className="brief__long-quest">
                        <p>
                         <b>Приоритеты в проекте </b> 
                        </p>

                        <textarea className = 'priority' placeholder='Ваш ответ...'>

                        </textarea>
                   </div>
                   <div className="brief__long-quest">
                        <p>
                         <b>Критически важные и приоритетные вещи в вашей игре </b> — например, сроки, качество проекта лучше чем у конкурентов, игра не должна содержать насилия и т.д 
                        </p>

                        <textarea className = 'priority' placeholder='Ваш ответ...'>

                        </textarea>
                   </div>
                   <div className="brief__long-quest">
                        <p>
                        Укажите что-то важное, что не вошло в предыдущие пункты
                        </p>

                        <textarea className = 'priority' placeholder='Ваш ответ...'>

                        </textarea>
                   </div>

                   <button type ='submit' className = 'submit'>ОТПРАВИТЬ</button>
                </form>
            </div>
        </div>
        
    )
}

export default Brief