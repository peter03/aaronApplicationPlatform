using System;
using System.Text;
using System.IO;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Threading.Tasks;

using aaronApplicationPlatform.Interface;

namespace aaronApplicationPlatform 
{ 
    public static class Extension
    {
        /// <summary>
        /// returns all target ids of a soure -> target mapping array 
        /// </summary>
        /// <param name="source"></param>
        /// <returns></returns>
        public static IEnumerable<int> ToIntArray(this IEnumerable<IMappingEntity> source)
        {
            IEnumerable<int> res = null;
            if (source != null && source.Any())
            {
                res = source.Select(s => s.TargetId).ToArray();
            }
            return res;
        }

        public static string ToMd5Hash(this string input)
        {
            using MD5 md5Hash = MD5.Create();
            byte[] data = md5Hash.ComputeHash(Encoding.UTF8.GetBytes(input));
            StringBuilder sBuilder = new StringBuilder();

            for (int i = 0; i < data.Length; i++)
            {
                sBuilder.Append(data[i].ToString("x2"));
            }
            return sBuilder.ToString();
        }

    }
}
