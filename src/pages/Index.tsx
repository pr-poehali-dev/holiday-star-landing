import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Star" className="text-yellow-600" size={24} />
              <span className="text-xl font-medium text-black">Звёзды</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#products" className="text-gray-700 hover:text-black transition-colors">Товары</a>
              <a href="#about" className="text-gray-700 hover:text-black transition-colors">О нас</a>
              <Button variant="outline" size="sm">Конфигуратор</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl font-light leading-tight text-black">
                Создайте<br />
                <span className="font-medium">волшебство</span><br />
                вместе
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-md">
                Каждая звезда создана вручную с любовью. Принесите тепло семейного уюта в ваш дом этой зимой.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-black text-white hover:bg-gray-800 px-8 py-4 text-lg">
                  Создать свою звезду
                </Button>
                <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-gray-300">
                  Посмотреть товары
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl">
                <img 
                  src="/img/f46801d9-41ad-4f8a-9222-4245406edcc5.jpg" 
                  alt="Рукотворная новогодняя звезда"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full blur-xl opacity-30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-light text-black">Каждая звезда уникальна</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ручная работа, внимание к деталям и семейные традиции в каждом изделии
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto">
                <Icon name="Sparkles" className="text-yellow-600" size={32} />
              </div>
              <h3 className="text-xl font-medium text-black">Ручная работа</h3>
              <p className="text-gray-600 leading-relaxed">
                Каждая звезда создается вручную с особым вниманием к деталям и любовью к ремеслу
              </p>
            </div>
            
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto">
                <Icon name="Home" className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-medium text-black">Семейный уют</h3>
              <p className="text-gray-600 leading-relaxed">
                Создаем атмосферу тепла и единения, которая объединяет семьи в праздничные моменты
              </p>
            </div>
            
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto">
                <Icon name="Gift" className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-medium text-black">Особенный подарок</h3>
              <p className="text-gray-600 leading-relaxed">
                Уникальные изделия, которые станут особенным подарком для ваших близких
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-light text-black">Наши звёзды</h2>
            <p className="text-xl text-gray-600">Выберите идеальную звезду для вашего дома</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white overflow-hidden">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="/img/789df683-5a88-4687-9504-172a1a0378b6.jpg" 
                  alt="Классическая звезда"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-medium text-black">Классическая звезда</h3>
                <p className="text-gray-600">Элегантная золотистая звезда ручной работы</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-light text-black">от 2 990 ₽</span>
                  <Button className="bg-black text-white hover:bg-gray-800">
                    Настроить
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white overflow-hidden">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="/img/789df683-5a88-4687-9504-172a1a0378b6.jpg" 
                  alt="Премиум звезда"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-medium text-black">Премиум коллекция</h3>
                <p className="text-gray-600">Эксклюзивный дизайн с персонализацией</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-light text-black">от 4 990 ₽</span>
                  <Button className="bg-black text-white hover:bg-gray-800">
                    Настроить
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white overflow-hidden">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="/img/789df683-5a88-4687-9504-172a1a0378b6.jpg" 
                  alt="Семейный набор"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-medium text-black">Семейный набор</h3>
                <p className="text-gray-600">Набор звезд для всей семьи</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-light text-black">от 7 990 ₽</span>
                  <Button className="bg-black text-white hover:bg-gray-800">
                    Настроить
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section id="about" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-light text-black leading-tight">
                Традиции ручной работы
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Каждая звезда рождается в нашей мастерской, где традиционные техники встречаются 
                с современным дизайном. Мы верим, что рукотворные изделия несут особую энергетику 
                и создают неповторимую атмосферу уюта в доме.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Наши мастера вкладывают душу в каждое изделие, делая его не просто украшением, 
                а частью ваших семейных традиций и праздничных воспоминаний.
              </p>
              <Button size="lg" className="bg-black text-white hover:bg-gray-800 px-8 py-4">
                Узнать больше
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden">
                <img 
                  src="/img/f46801d9-41ad-4f8a-9222-4245406edcc5.jpg" 
                  alt="Процесс создания"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-4xl font-light text-black">Создайте свою уникальную звезду</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Воспользуйтесь нашим конфигуратором, чтобы создать звезду, которая идеально впишется в вашу семейную традицию
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-black text-white hover:bg-gray-800 px-12 py-4 text-lg">
              Открыть конфигуратор
            </Button>
            <Button variant="outline" size="lg" className="px-12 py-4 text-lg border-gray-300">
              Посмотреть каталог
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Icon name="Star" className="text-yellow-400" size={24} />
                <span className="text-xl font-medium">Звёзды</span>
              </div>
              <p className="text-gray-400">Создаем волшебство ручной работы для вашего дома</p>
            </div>
            <div className="space-y-4">
              <h4 className="font-medium">Товары</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Классические звезды</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Премиум коллекция</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Семейные наборы</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-medium">Сервис</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Конфигуратор</a></li>
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Доставка</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-medium">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li>hello@stars.ru</li>
                <li>+7 (999) 123-45-67</li>
                <li>Москва, Россия</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Звёзды. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}