﻿using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IRepositories
{
    public interface IClientRepository
    {
        void Save(DAL.Person person);
    }
  

}
